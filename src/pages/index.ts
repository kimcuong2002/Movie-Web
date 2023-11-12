import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const FilmDetail = lazy(() => import('@/pages/film-detail'));

export { Home, FilmDetail };
