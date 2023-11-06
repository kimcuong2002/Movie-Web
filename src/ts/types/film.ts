export type FilmType = {
  id?: string;
  className?: string;
  position?: 'vertical' | 'above' | 'horizontal';
  overview?: string;
  backdrop_path?: string;
  original_title?: string;
  popularity?: number;
  title?: string;
  vote_count?: number;
  filmName?: string;
  poster_path?: string;
  release_date?: string;
  author?: string;
  episode?: string;
};

export type ResponseData = {
  code: number;
  data: FilmData[];
};

export type FilmData = Partial<
  Pick<FilmType, 'id' | 'filmName' | 'original_title' | 'backdrop_path'>
>;
