import Image from "next/image";

type BrandLogoProps = {
  variant?: "navbar" | "footer" | "hero" | "default";
  className?: string;
};

export default function BrandLogo({ variant = "default", className = "" }: BrandLogoProps) {
  // Base path for the official logo
  const logoSrc = "/images/brand/vipin-punjabi-dhol-logo.jpg";
  const altText = "VIPIN PUNJABI DHOL & EVENTS Official Logo";

  // Define sizing and container styles based on variant
  // Using fixed dimensions to prevent layout shift and maintain aspect ratio.
  // The source image is 1254x1254 (1:1 aspect ratio)
  
  let sizeClasses = "w-32 h-32"; // default
  
  switch (variant) {
    case "navbar":
      // Substantially smaller but complete. Not cropped.
      sizeClasses = "w-12 h-12 md:w-14 md:h-14"; 
      break;
    case "footer":
      // Complete official logo for footer, typically larger
      sizeClasses = "w-24 h-24 md:w-24 md:h-24";
      break;
    case "hero":
      // Large presentation for Ganpati/Hero
      sizeClasses = "w-64 h-64 md:w-80 md:h-80";
      break;
    default:
      break;
  }

  return (
    <div className={`relative flex-shrink-0 rounded-sm overflow-hidden ${sizeClasses} ${className}`}>
      <Image
        src={logoSrc}
        alt={altText}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
        priority={variant === "navbar" || variant === "hero"}
      />
    </div>
  );
}
