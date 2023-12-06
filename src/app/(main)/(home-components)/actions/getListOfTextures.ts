"use server";
import fs from "fs";
import path from "path";

export default async function GetListOfTextures() {
  const pathName = path.resolve("./public", "map/Textures");

  const names: string[] = [];
  const dir = await fs.promises.opendir(pathName);
  for await (const dirent of dir) {
    names.push("/map/Textures/" + dirent.name);
  }

  console.log(names);

  return names;
}
