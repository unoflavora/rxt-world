import { graphql } from "@/gql";
import { graphqlClient } from "@/lib/graphql-client";
import { Member } from "@/gql/graphql";
import Person from "./_components/core/person";
import PersonPopup from "@/components/shared/person/personThreePopup";

const getTeamData = graphql(`
  query GetTeamMemberConfig {
    TeamMemberDisplayConfig {
      teamDescription
      orderInAllTeamPage {
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

export default async function Page() {
  const { TeamMemberDisplayConfig: config } =
    await graphqlClient.request(getTeamData);

  return (
    <div className="container py-20 flex flex-col gap-20">
      <div className="flex w-full justify-center items-center flex-col gap-2">
        <h1>OUR TEAM</h1>
        <h2 className="font-bold text-white text-center text-5xl">
          Meet the RXT TEAM
        </h2>
        <p className="text-tertiary text-center">
          {config != null ? config.teamDescription : "Team Description"}
        </p>
      </div>

      <div className="grid max-sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {config == null
          ? "No Team"
          : config.orderInAllTeamPage.map((team) => {
              if (team == null) return <></>;
              return (
                <PersonPopup
                  key={team.id}
                  person={team as Member}
                  trigger={<Person person={team as Member} />}
                />
              );
            })}
      </div>
    </div>
  );
}
