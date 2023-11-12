import { createQueryKeys } from '@lukemorales/query-key-factory';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { QueryOptions } from './../../../ts/types/common';
import filmApi from '../services/film.api';
import { ResponseData, ResponseDataFilmDetail } from '../services/types';

const films = createQueryKeys('films', {
  getList: () => ({
    queryKey: ['films'],
    queryFn: () => filmApi.getList(),
  }),
  getDetail: (slug: string) => ({
    queryKey: [slug],
    queryFn: () => filmApi.getDetail(slug),
  }),
});

export const useFilmsListQuery = <T = ResponseData>(
  options: QueryOptions<T, ResponseData> = {},
) => {
  return useQuery({
    ...films.getList(),
    keepPreviousData: true,
    ...options,
  });
};

export const useFilmDetailQuery = (
  slug: string,
): UseQueryResult<ResponseDataFilmDetail, unknown> => {
  return useQuery({
    ...films.getDetail(slug),
  });
};
