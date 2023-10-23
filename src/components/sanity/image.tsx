import Image from "next/image";
import { buildUrl } from "@/lib/sanity/client";
import { getImageDimensions } from "@sanity/asset-utils";

export function ImageComponent({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) {
  const { width, height } = getImageDimensions(value);

  const src = buildUrl({ value, isInline });

  return (
    <Image
      width={width}
      height={height}
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
