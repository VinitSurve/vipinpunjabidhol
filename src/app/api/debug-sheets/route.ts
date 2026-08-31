import { NextResponse } from "next/server";
import { getVercelOidcToken } from "@vercel/oidc";
import { ExternalAccountClient } from "google-auth-library";
import { google } from "googleapis";

export async function GET() {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const log: any[] = [];

    // 1. Authenticate
    log.push("1. Authenticating with Workload Identity Federation...");
    const auth = ExternalAccountClient.fromJSON({
      type: "external_account",
      audience: `//iam.googleapis.com/projects/${process.env.GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${process.env.GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,
      subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
      token_url: "https://sts.googleapis.com/v1/token",
      service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${process.env.GCP_SERVICE_ACCOUNT_EMAIL}:generateAccessToken`,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      subject_token_supplier: { getSubjectToken: getVercelOidcToken },
    });

    const sheets = google.sheets({ version: "v4", auth: auth as any });

    // 2. spreadsheets.get (Fetch Metadata)
    log.push(`2. Fetching spreadsheet metadata for ID: ${spreadsheetId}...`);
    const meta = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: "spreadsheetId,sheets.properties",
    });
    
    // 3. Print actual sheet titles with Unicode representation
    const actualSheets = meta.data.sheets?.map(s => {
      const title = s.properties?.title || "";
      const charCodes = Array.from(title).map(char => {
        return `${char} (U+${char.charCodeAt(0).toString(16).padStart(4, '0')})`;
      });

      return {
        title: title,
        titleLength: title.length,
        characterCodes: charCodes,
        sheetId: s.properties?.sheetId,
        index: s.properties?.index
      };
    }) || [];
    
    log.push("3. Discovered Sheets & Unicode Breakdown:");
    log.push(actualSheets);

    // 4. Locate Ganpati sheet
    const ganpatiTab = actualSheets.find(s => s.title?.toLowerCase().includes("ganpati"));
    if (!ganpatiTab) {
      log.push("FAIL: Could not find any tab containing 'ganpati'");
      return NextResponse.json({ log });
    }

    const exactTitle = ganpatiTab.title;
    log.push(`4. Found Ganpati tab. Exact Title string: "${exactTitle}"`);

    // Always wrap in single quotes to be safe against spaces, as required by A1 notation
    const readRange = `'${exactTitle}'!A1:F5`;
    
    // 5. values.get on the EXACT discovered title
    log.push(`5. Testing values.get on range: ${readRange}`);
    try {
      const readResult = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: readRange,
      });
      log.push("values.get SUCCESS! Read " + (readResult.data.values?.length || 0) + " rows.");
    } catch (err: any) {
      log.push(`FAIL: values.get returned error: ${err.message}`);
      return NextResponse.json({ log, errorDetails: err });
    }
    
    // 6. values.append on the EXACT discovered title
    const appendRange = `'${exactTitle}'!A:F`;
    log.push(`6. Testing values.append on range: ${appendRange}`);
    
    try {
      const appendResult = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: appendRange,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            new Date().toISOString(),
            "DIAGNOSTIC TEST",
            "0000000000",
            "2026-09-01",
            "Test Experience",
            "NEW"
          ]],
        },
      });
      log.push("values.append SUCCESS!");
      log.push(`Updated Range: ${appendResult.data.updates?.updatedRange}`);
    } catch (err: any) {
      log.push(`FAIL: values.append returned error: ${err.message}`);
      return NextResponse.json({ log, errorDetails: err });
    }

    log.push("DIAGNOSTIC COMPLETE. ALL TESTS PASSED.");
    return NextResponse.json({ success: true, log });

  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message, 
      stack: error.stack 
    }, { status: 500 });
  }
}
