import type { Metadata } from "next";
import { Noto_Sans, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/navbar";

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
  title: "Create Next App",
  description: "Generated by create next app",
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
        <div className="w-full  flex flex-col">
          <Navbar />

          {children}
        </div>
      </body>
    </html>
  );
}
