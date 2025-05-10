export type imgMeta = {
    src: string;
    width?: string;
    height?: string;
    alt: string;
}

export type SocialLink = {
    id: number;
    name: string;
    url: string;
    imgMeta: imgMeta;
}