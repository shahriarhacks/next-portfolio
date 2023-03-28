interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skills";
  image: Image;
  progress: number;
  title: string;
}
export interface SKill extends SanityBody {
  _type: "skills";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  isCurrentWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "projects";
  title: string;
  image: Image;
  linkBuild: string;
  summery: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
