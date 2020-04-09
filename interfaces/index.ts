// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface ILinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  target?: string;
}

export interface Social {
  icon: JSX.Element;
  link: string;
}

export interface IPost {
  title: string;
  imageUrl: string;
  slug: string;
  description: string;
  tags?: string[];
}

export interface IPosts {
  allPosts?: IPost[];
}
