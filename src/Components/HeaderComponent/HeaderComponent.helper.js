import { ROUTE_PATHS } from '../../Routes/routes';

const headerRoutes = [
  {
    label: 'Random Jokes',
    to: ROUTE_PATHS.RANDOM_JOKES,
    id: 1,
  },
  {
    label: 'Joke Categories',
    to: ROUTE_PATHS.CATERORIES,
    id: 2,
  },
  {
    label: 'Search Jokes',
    to: ROUTE_PATHS.SEARCH,
    id: 3,
  },
];

export default headerRoutes;
