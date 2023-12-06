import { StructureBuilder } from "sanity/desk";

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Home Page Video")
        .child(
          S.document().schemaType("homepageVideo").documentId("homepageVideo")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["homepageVideo"].includes(listItem.getId() as string)
      ),
    ]);
