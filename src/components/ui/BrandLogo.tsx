import Image from "next/image";

type BrandLogoProps = {
  variant?: "navbar" | "footer" | "hero" | "default";
  className?: string;
};

export default function BrandLogo({ variant = "default", className = "" }: BrandLogoProps) {
  let sizeClasses = "w-32 h-32"; // default
  
  switch (variant) {
    case "navbar":
      sizeClasses = "w-14 h-14 md:w-16 md:h-16"; 
      break;
    case "footer":
      sizeClasses = "w-32 h-32 md:w-40 md:h-40";
      break;
    case "hero":
      sizeClasses = "w-64 h-64 md:w-80 md:h-80";
      break;
    default:
      break;
  }

  return (
    <div className={`relative flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden border border-[#B58A3A]/40 shadow-lg ${sizeClasses} ${className}`}>
      <Image
        src="/images/brand/vipin-punjabi-dhol-logo.webp"
        alt="VIPIN PUNJABI DHOL & EVENTS Official Logo"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={variant === "navbar" || variant === "hero"}
      />
    </div>
  );
}
