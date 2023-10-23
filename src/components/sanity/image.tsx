import Image from "next/image";
import { buildUrl } from "@/lib/sanity/client";
import { getImageDimensions } from "@sanity/asset-utils";

export function ImageComponent({
  value,
  isInline,
  maxWidth,
  maxHeight,
}: {
  value: any;
  isInline: boolean;
  maxWidth?: number;
  maxHeight?: number;
}) {
  const { width, height } = getImageDimensions(value);

  const src = buildUrl({ value, isInline });

  return (
    <Image
      width={maxWidth == null || width < maxWidth ? width : maxWidth}
      height={maxHeight == null || height < maxHeight ? height : maxHeight}
      src={src}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
}
