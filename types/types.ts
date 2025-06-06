export interface Image {
    id: string | number;
    src: string;
    meta?: ImgMeta;
  }

export type ImgMeta = {
    caption?: string;
    credit?: string;
    width?: string;
    height?: string;
    alt: string;
}

export type SocialLink = {
    id: number;
    name: string;
    url: string;
    image: Image;
}

export type NavLink = {
    id: string | number;
    text: string;
    path: string;
    comingSoon?: boolean;
}