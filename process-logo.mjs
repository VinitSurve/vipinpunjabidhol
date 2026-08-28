import * as Jimp from "jimp";

async function processLogo() {
  try {
    const image = await Jimp.read("./public/images/brand/vipin-punjabi-dhol-logo.jpg");
    
    // We want to make black/dark pixels transparent.
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is very dark (close to black)
      if (red < 30 && green < 30 && blue < 30) {
        // Set alpha to 0 (transparent)
        this.bitmap.data[idx + 3] = 0;
      } else if (red < 50 && green < 50 && blue < 50) {
        // Feathering for edge pixels
        this.bitmap.data[idx + 3] = 100;
      }
    });

    await image.writeAsync("./public/images/brand/vipin-punjabi-dhol-logo-transparent.png");
    console.log("Successfully created transparent logo.");
  } catch (err) {
    console.error("Error processing logo:", err);
  }
}

processLogo();
