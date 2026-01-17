// Gallery-related types
export interface GalleryImage {
  _id: string;
  title?: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  date?: string;
}

export interface ProcessedGalleryImage {
  _id: string;
  title?: string;
  alt?: string;
  date?: string;
  thumbnailUrl: string;
  fullUrl: string;
}
