import { sanityFetch } from "@/lib/sanity/lib/fetch";
import Team from "./_components/core/popup";

export default async function Page() {
  const members = await sanityFetch<Person[]>({
    query: `*[_type == "members"] {id, 
    name, description, socials, title, "file": file.asset
    }`,
    tags: ["members"],
  });

  const teamDesc = await sanityFetch<string>({
    query: `*[_type == "allTeam"]{description}[0].description`,
    tags: ["allTeam"],
  });
  console.log(members);

  return (
    <div className="container py-20 flex flex-col gap-20">
      <div className="flex w-full justify-center items-center flex-col gap-2">
        <h1>OUR TEAM</h1>
        <h2 className="font-bold text-white text-center text-5xl">
          Meet the RXT TEAM
        </h2>
        <p className="text-tertiary text-center">{teamDesc}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-10">
        {members.map((member, i) => (
          <Team key={member.id} person={member} />
        ))}
      </div>
    </div>
  );
}
