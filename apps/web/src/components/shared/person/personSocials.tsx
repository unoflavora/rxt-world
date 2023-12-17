import { Member } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

export default function Socials(props: { person: Member }) {
  var { person } = props;

  return (
    <div className="flex gap-1 pt-4 pb-2 px-2">
      {["email", "facebook", "twitter", "instagram", "linkedin"].map(
        (social, key) => {
          var socialUrl = person[social as keyof Member];

          if (socialUrl == null) return null;

          return (
            <Link
              key={social}
              href={social !== "email" ? socialUrl : `mailto:${socialUrl}`}
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
        }
      )}
    </div>
  );
}
