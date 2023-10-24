import Image from "next/image";
import { buildUrl } from "@/lib/sanity/client";
import { getImageDimensions } from "@sanity/asset-utils";
import React from "react";
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
    console.log(height);

    return (
      <div
        style={{
          backgroundImage: `url('${src}')`,
          width: fixedSize ? "100%" : width,
          aspectRatio: fixedSize ? "4 / 3" : "auto",
        }}
        className={`w-full min-h-[16rem] h-full  bg-cover`}
      />
    );
  }
);

ImageComponent.displayName = "ArticleImage";
