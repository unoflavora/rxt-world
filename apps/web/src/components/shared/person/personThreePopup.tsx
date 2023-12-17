import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ThreeScene from "@/components/shared/threeScene";
import Image from "next/image";
import { Member } from "@/gql/graphql";
import Socials from "./personSocials";
import { getUrl } from "@/lib/utils";

export default function PersonPopup({
  person,
  trigger,
}: {
  person: Member;
  trigger: React.ReactNode;
}) {
  if (person == null) return;
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <ThreeScene
          objUrl={getUrl(person.obj.url as string)}
          matUrl={getUrl(person.mat.url as string)}
        />
        <Image
          src="/graphics/rotate.svg"
          width={50}
          height={15}
          alt="rotate here"
          className="fixed left-10 top-10 animate-pulse "
        />

        <DialogHeader>
          <DialogTitle className="text-amber-300">{person.name}</DialogTitle>
          <DialogDescription className="text-white">
            {person.description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Socials person={person}></Socials>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
