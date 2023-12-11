import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import React from "react";
import { buildUrl } from "../../lib/sanity/client";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  value: any;
  isInline: boolean;
  fixedSize?: boolean;
}

export const ImageComponent = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    const { value, isInline, fixedSize } = { ...props };

    const { width, height } = getImageDimensions(value);

    const src = buildUrl({ value, isInline });

    return (
      <Image
        src={src}
        width={width}
        height={height}
        alt="image"
        className={cn(
          `w-full min-h-[16rem] h-full object-cover object-left`,
          className
        )}
      />
    );
  }
);

ImageComponent.displayName = "ArticleImage";
