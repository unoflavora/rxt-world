import { ImageComponent } from "@/components/sanity/image";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/lib/sanity/lib/fetch";
import Link from "next/link";
import { stringToPath } from "sanity";

export default async function Teams() {
  const team = await sanityFetch<{
    description: string;
    image: { _type: string; _ref: string };
  }>({
    query: `*[_type == "allTeam"] {
              description,
              "image": image.asset
            }[0]`,
    tags: ["news"],
  });

  return (
    <div className="container w-full h-full flex flex-col gap-8 py-4 text-white">
      <h1 className="text-2xl  text-center font-crimson uppercase p-2">
        THE TEAMS
      </h1>
      <ImageComponent
        className="object-contain"
        value={team.image}
        isInline={false}
      />

      <p>{team.description}</p>
      <Link className="flex justify-center" href="/our-team">
        <Button className=" text-white bg-transparent border w-fit font-bold hover:bg-black hover:border-white hover:text-white">
          SEE FULL TEAM
        </Button>
      </Link>
    </div>
  );
}
