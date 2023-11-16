import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import { routeList } from '@/data/constant/navs';
import LayoutComponent from '@/layout';

const NotFound = lazy(() => import('@/pages/not-found'));
const FilmDetail = lazy(() => import('@/pages/film-detail'));
const FilmVideo = lazy(() => import('@/pages/film-video'));

const routes = [
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        path: '',
        element: <Navigate to="home" />,
      },
      ...routeList,
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/:slug',
        element: <FilmDetail />,
      },
      {
        path: '/:slug/:id',
        element: <FilmVideo />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
