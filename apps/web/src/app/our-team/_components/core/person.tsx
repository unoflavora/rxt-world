import Image from "next/image";
import Socials from "../shared/socials";
import { Member } from "@/gql/graphql";

export default function Person(props: { person: Member }) {
  const { person } = props;
  return (
    <div className="h-full hover:scale-110 transition-transform text-left flex flex-col gap-3 border border-gray-50/10 ">
      <Image
        className="w-full h-[20rem]"
        src={"/placeholder.png"}
        width={500}
        height={500}
        alt="Image"
      />
      <div className="flex flex-col gap-2 px-2 bg-[#0F0E0B]">
        <h1 className="font-bold text-white text-lg ">{person.name}</h1>
        <h2 className="text-tertiary">{person.title}</h2>
        <p className="h-full text-tertiary truncate">{person.description}</p>
      </div>

      <Socials socials={person.socials[0]} />
    </div>
  );
}
