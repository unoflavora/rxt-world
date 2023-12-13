import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Person from "./person";
import Socials from "../shared/socials";
import ThreeScene from "@/components/shared/threeScene";
import Image from "next/image";
import { Member } from "@/gql/graphql";

export default function PersonPopup({ person }: { person: Member }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Person person={person} />
      </DialogTrigger>
      <DialogContent>
        <ThreeScene
          objUrl={person.obj.url as string}
          matUrl={person.mat.url as string}
        />
        <Image
          src="/graphics/rotate.svg"
          width={50}
          height={15}
          alt="rotate here"
          className="fixed left-10 top-10 animate-pulse"
        />

        <DialogHeader>
          <DialogTitle>{person.name}</DialogTitle>
          <DialogDescription>{person.description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Socials socials={person.socials[0]}></Socials>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
