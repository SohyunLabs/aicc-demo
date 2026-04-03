import Image from "next/image";
import { Monitor } from "lucide-react";
import { brand } from "@/lib/brand-config";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export function BrandLogo({ className, size = 18 }: BrandLogoProps) {
  if (brand.logoSrc) {
    return (
      <Image
        src={brand.logoSrc}
        alt={brand.logoAlt}
        width={size}
        height={size}
        className={className}
      />
    );
  }

  return <Monitor className={className} style={{ width: size, height: size }} />;
}
