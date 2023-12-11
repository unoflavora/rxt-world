import { StructureBuilder } from "sanity/desk";

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["homepageVideo", "allTeam"].includes(listItem.getId() as string)
      ),
      S.listItem()
        .title("Home Page Video")
        .child(
          S.document().schemaType("homepageVideo").documentId("homepageVideo")
        ),
      S.listItem()
        .title("All Team Members")
        .child(S.document().schemaType("allTeam").documentId("allTeam")),
    ]);
