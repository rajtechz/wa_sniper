import { lazy } from 'react';

const BoatList = lazy(() => import('./BoatList'));

const boatListConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/whasappBot/list',
      element: <BoatList />,
    },
  ],
};
export default boatListConfig;
