import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const FilmDetail = lazy(() => import('@/pages/film-detail'));
const FilmVideo = lazy(() => import('@/pages/film-video'));

export { Home, FilmDetail, FilmVideo };
