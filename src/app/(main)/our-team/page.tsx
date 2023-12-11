import { sanityFetch } from "@/lib/sanity/lib/fetch";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const members = await sanityFetch<Person[]>({
    query: `*[_type == "members"] {id, 
    name, description, socials, title
    }`,
    tags: ["members"],
  });
  console.log(members);

  return (
    <div className="container py-20 flex flex-col gap-20">
      <div className="flex w-full justify-center items-center flex-col gap-2">
        <h1>OUR TEAM</h1>
        <h2 className="font-bold text-white text-5xl">Meet the RXT TEAM</h2>
        <p className="text-tertiary">Lorem Ipsum</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {members.map((member, i) => (
          <Person key={member.id} person={member} />
        ))}
      </div>
    </div>
  );
}

type Person = {
  id: string;
  name: string;
  description: string;
  socials: { [key: string]: string };
  title: string;
};

function Person(props: { person: Person }) {
  const { person } = props;
  return (
    <div className="flex flex-col gap-3 border border-gray-50/10 ">
      <Image
        className="w-full h-full"
        src={"/placeholder.png"}
        width={500}
        height={500}
        alt="Image"
      />
      <div className="flex flex-col gap-2 px-2 bg-[#0F0E0B]">
        <h1 className="font-bold text-white text-lg ">{person.name}</h1>
        <h2 className="text-tertiary">{person.title}</h2>
        <p className="text-tertiary truncate">{person.description}</p>
      </div>
      <div className="flex gap-1 pt-4 pb-2 px-2">
        {Object.keys(person.socials).map((social, key) => {
          var link = person.socials[social];
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
    </div>
  );
}
