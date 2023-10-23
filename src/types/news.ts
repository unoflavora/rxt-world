import { PortableTextBlockComponent } from "@portabletext/react";

export type NewsType = {
  _id: string;
  _updatedAt: Date;
  _createdAt: Date;
  title: string;
  description: string;
  body: any[];
  image: ImageType;
  slug: SlugType;
};

type ImageType = {
  asset: {
    _ref: string;
    _type: "reference";
  };
};

type SlugType = {
  current: string;
};
