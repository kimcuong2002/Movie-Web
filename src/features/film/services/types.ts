export type FilmType = {
  _id?: string;
  className?: string;
  position?: 'vertical' | 'above' | 'horizontal';
  name?: string;
  slug?: string;
  origin_name?: string;
  content?: string;
  type?: string;
  status?: string;
  thumb_url?: string;
  poster_url?: string;
  episode_current?: number;
  quality?: string;
  lang?: string;
  year?: number;
  view?: number;
  actor?: [];
  category?: [
    {
      id?: string;
      name?: string;
      slug?: string;
    },
  ];
  country?: [
    {
      id: string;
      name?: string;
      slug?: string;
    },
  ];
  episodes?: [
    {
      server_name?: string;
      server_data?: [
        {
          name?: number;
          slug?: number;
          filename?: string;
          link_embed?: string;
        },
      ];
    },
  ];
};

export type ResponseData = {
  status: number;
  items: FilmData[];
};

export type FilmData = Partial<
  Pick<FilmType, '_id' | 'name' | 'thumb_url' | 'year' | 'position' | 'slug'>
>;
