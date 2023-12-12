import Image from "next/image";
import Link from "next/link";

export default function Socials(props: { socials: { [key: string]: string } }) {
  var { socials } = props;

  return (
    <div className="flex gap-1 pt-4 pb-2 px-2">
      {Object.keys(socials).map((social, key) => {
        var link = socials[social];
        return (
          <Link
            key={social}
            href={social !== "email" ? link : `mailto:${link}`}
          >
            <Image
              className="hover:scale-125 transition-transform"
              src={`/icons/outline/${social}.svg`}
              height={25}
              width={25}
              alt={social}
            />
          </Link>
        );
      })}
    </div>
  );
}
