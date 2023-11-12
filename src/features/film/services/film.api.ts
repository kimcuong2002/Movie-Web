import { ResponseData, ResponseDataFilmDetail } from './types';
import axiosClient from '@/apis/axios-client';
import { getDetail } from '@/utils';
// eslint-disable-next-line no-restricted-imports

const homeFilms = String(import.meta.env.VITE_API_FILMS);

const filmApi = {
  getList: (): Promise<ResponseData> => axiosClient.get(homeFilms),
  getDetail: (slug: string): Promise<ResponseDataFilmDetail> =>
    axiosClient.get(getDetail(slug)),
};

export default filmApi;
