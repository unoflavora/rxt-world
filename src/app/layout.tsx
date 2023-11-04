import type { Metadata } from "next";
import { Noto_Sans, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "./footer";
import { siteConfig } from "./siteConfig";

const sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--notoSans",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--crimson",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          sans.className + " " + "bg-background min-h-screen w-full h-full "
        }
      >
        <div suppressHydrationWarning className="w-full  flex flex-col">
          <Navbar />

          <div className="w-full h-full flex flex-col py-24">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
