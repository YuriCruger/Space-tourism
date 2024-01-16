type Image = {
  png: string;
  webp: string;
};

export type Destination = {
  name: string;
  images: Image;
  description: string;
  distance: string;
  travel: string;
};

export type CrewMember = {
  id: string;
  name: string;
  images: Image;
  role: string;
  bio: string;
};

type Technology = {
  id: string;
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export type dataType = {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
};
