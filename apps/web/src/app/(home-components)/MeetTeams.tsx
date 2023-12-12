import { Button } from "@/components/ui/button";
import { graphql } from "@/gql";
import { graphqlClient } from "@/lib/graphql-client";
import Image from "next/image";
import Link from "next/link";

export default async function Teams() {
  const getTeamDescriptions = graphql(`
    query getTeamDescriptions {
      AllTeams {
        docs {
          id
          photo {
            filename
            url
          }
          description
        }
      }
    }
  `);
  const { AllTeams: desc } = await graphqlClient.request(getTeamDescriptions);

  if (desc == null || desc.docs == null || desc.docs[0] == null) return <></>;

  return (
    <div className="container w-full h-full flex flex-col gap-8 py-4 text-white">
      <h1 className="text-2xl  text-center font-crimson uppercase p-2">
        THE TEAMS
      </h1>
      <Image
        src={desc.docs[0].photo.url as string}
        width={1200}
        height={100}
        className="w-full h-full object-contain object-center"
        alt={desc.docs[0].description}
      />
      <p>{desc.docs[0].description}</p>
      <Link className="flex justify-center" href="/our-team">
        <Button className=" text-white bg-transparent border w-fit font-bold hover:bg-white hover:border-white hover:text-black">
          SEE FULL TEAM
        </Button>
      </Link>
    </div>
  );
}
