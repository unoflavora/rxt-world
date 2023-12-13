import Team from "./_components/core/popup";
import { graphql } from "@/gql";
import { graphqlClient } from "@/lib/graphql-client";
import { Member } from "@/gql/graphql";

const getAllTeamMembers = graphql(`
  query getAllTeamMembers {
    Members {
      docs {
        id
        name
        title
        description
        socials {
          email
          facebook
          linkedin
          twitter
        }
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

export default async function Page() {
  const { AllTeams: desc } = await graphqlClient.request(getTeamDescriptions);

  const { Members: teams } = await graphqlClient.request(getAllTeamMembers);

  return (
    <div className="container py-20 flex flex-col gap-20">
      <div className="flex w-full justify-center items-center flex-col gap-2">
        <h1>OUR TEAM</h1>
        <h2 className="font-bold text-white text-center text-5xl">
          Meet the RXT TEAM
        </h2>
        <p className="text-tertiary text-center">
          {desc != null && desc.docs != null && desc.docs[0] != null
            ? desc.docs[0].description
            : "Team Description"}
        </p>
      </div>

      <div className="grid max-sm:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {teams == null || teams.docs == null
          ? "No Team"
          : teams.docs.map((team) => {
              if (team == null) return <></>;
              return <Team key={team.id} person={team as Member} />;
            })}
      </div>
    </div>
  );
}
