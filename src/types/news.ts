import { PortableTextBlockComponent } from "@portabletext/react";

export type NewsType = {
  _id: string;
  _updatedAt: Date;
  _createdAt: Date;
  title: string;
  body: any[];
};
