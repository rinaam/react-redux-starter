import React from 'react';
import { useRoutes, navigate } from 'hookrouter';
import RandomJokePage from '../Pages/RandomJokePage/RandomJokePage';
import CategoriesPage from '../Pages/CategoriesPage/CategoriesPage';
import SearchPage from '../Pages/SearchPage/SearchPage';

export const ROUTE_PATHS = {
  RANDOM_JOKES: '/',
  CATERORIES: '/categories',
  SEARCH: '/search',
};

const routes = {
  [ROUTE_PATHS.RANDOM_JOKES]: () => {
    navigate(ROUTE_PATHS.RANDOM_JOKES);
    return <RandomJokePage />;
  },
  [ROUTE_PATHS.CATERORIES]: () => {
    navigate(ROUTE_PATHS.CATERORIES);
    return <CategoriesPage />;
  },
  [ROUTE_PATHS.SEARCH]: () => {
    navigate(ROUTE_PATHS.SEARCH);
    return <SearchPage />;
  },
};

const AppRoutes = () => {
  const routeResult = useRoutes(routes);
  return routeResult;
};

export default AppRoutes;
