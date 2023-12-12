export type NewsType = {
  _id: string;
  _updatedAt: Date;
  _createdAt: Date;
  title: string;
  description: string;
  body: any[];
  image: FileType;
  slug: SlugType;
  date: string;
  Url: string;
};

type SlugType = {
  current: string;
};
