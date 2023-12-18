import PersonPopup from "@/components/shared/person/personThreePopup";
import { Button } from "@/components/ui/button";
import { graphql } from "@/gql";
import { Member } from "@/gql/graphql";
import { graphqlClient } from "@/lib/graphql-client";
import { getUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Teams() {
  const getTeamDescriptions = graphql(`
    query GetHomePageMember {
      TeamMemberDisplayConfig {
        teamDescription
        orderInHomePage {
          id
          name
          title
          description
          email
          facebook
          linkedin
          twitter
          image {
            filename
            url
            id
          }
          obj {
            url
          }
          mat {
            url
          }
        }
      }
    }
  `);
  const { TeamMemberDisplayConfig: config } =
    await graphqlClient.request(getTeamDescriptions);

  return (
    <div className="container w-full h-full flex flex-col gap-8 py-4 text-white">
      <h1 className="text-2xl  text-center font-crimson uppercase p-2">
        THE TEAMS
      </h1>
      <div className="flex justify-center">
        {config?.orderInHomePage.map((member, index) => {
          return (
            <div
              key={member.id}
              className={`relative h-24 sm:h-36 md:h-48 lg:h-72 w-full overflow-visible hover:scale-105 transition-transform`}
            >
              <PersonPopup
                person={member as Member}
                trigger={
                  <Image
                    loading="eager"
                    src={getUrl(member.image.url!)}
                    width={500}
                    height={100}
                    className={`w-full h-full absolute overflow-visible object-cover object-center `}
                    alt={config.teamDescription}
                  />
                }
              ></PersonPopup>
            </div>
          );
        })}
      </div>

      <p>{config?.teamDescription}</p>
      <Link className="flex justify-center" href="/our-team">
        <Button className=" text-white bg-transparent border w-fit font-bold hover:bg-white hover:border-white hover:text-black">
          SEE FULL TEAM
        </Button>
      </Link>
    </div>
  );
}
