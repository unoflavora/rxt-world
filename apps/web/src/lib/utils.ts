import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUrl(url: string) {
  if (process.env.NODE_ENV === "production") {
    return url.replace(
      process.env.DEVELOPMENT_ASSET_URL!,
      process.env.PRODUCTION_ASSET_URL!
    );
  }

  return url;
}
