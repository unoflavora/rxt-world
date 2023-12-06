import Logo from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socials = [
    {
      key: "Youtube",
      logo: "/icons/Youtube.svg",
      url: "/",
    },
    {
      key: "Twitter",
      logo: "/icons/Twitter.svg",
      url: "/",
    },
    {
      key: "Discord",
      logo: "/icons/Discord.svg",
      url: "/",
    },
    {
      key: "Facebook",
      logo: "/icons/Facebook.svg",
      url: "/",
    },
    {
      key: "Instagram",
      logo: "/icons/Instagram.svg",
      url: "/",
    },
  ];

  const links: { key: string; url: string }[] = [
    // {
    //   key: "Copyright",
    //   url: "/",
    // },
    // {
    //   key: "Privacy Policy",
    //   url: "/",
    // },
    // {
    //   key: "Terms of Service",
    //   url: "/",
    // },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-4  pb-5 justify-center">
      <Separator />
      <div className="container flex flex-col gap-5 justify-center md:flex-row md:justify-between py-5">
        <div className="flex flex-col gap-5 justify-between items-center ">
          <Logo />
          <div className="flex w-full justify-between">
            {socials.map((social, i) => {
              return (
                <Link key={social.key} href={social.url}>
                  <Image
                    src={social.logo}
                    height={25}
                    width={25}
                    alt={social.key}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:gap-10 justify-center items-center md:justify-end md:items-end">
          <div className="w-full flex  flex-col md:flex-row justify-center items-center gap-5 lg:gap-10">
            {links.map((link, i) => (
              <Link
                className={cn(
                  "hover:text-white/20 transition-colors ",
                  `flex md:gap-10`
                )}
                key={link.key}
                href={link.url}
              >
                <p>{link.key}</p>
                {i !== links.length - 1 && (
                  <Separator
                    className="h-[24px] hidden md:block"
                    orientation="vertical"
                  />
                )}
              </Link>
            ))}
          </div>
          <p>©2023 RXT World. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
