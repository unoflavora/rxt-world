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
import { dataset, projectId } from "@/lib/sanity/config";
import { getFileAsset } from "@sanity/asset-utils";
import ThreeScene from "@/components/shared/threeScene";
import Image from "next/image";

export default function PersonPopup({ person }: { person: Person }) {
  var file = getFileAsset(person.file, { dataset, projectId });

  return (
    <Dialog>
      <DialogTrigger>
        <Person person={person} />
      </DialogTrigger>
      <div className="flex gap-5">
        <DialogContent>
          <ThreeScene url={"/Dan_Stone.glb"} />
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
            <Socials socials={person.socials}></Socials>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
}
