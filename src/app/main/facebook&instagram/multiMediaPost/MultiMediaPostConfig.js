import { lazy } from 'react';

const MultiMediaPostApp = lazy(() => import('./MultiMediaPostApp'));



const multiMediaPostConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/facebook/instagram/multiMediaPost/MultiMediaPostApp',
      element: <MultiMediaPostApp />,
    },
    // {
    //   path :"/facebook/instagram/multiMediaPost/MultiMediaPostApp",
    //  element: <Campaign/>
    // }                       
  ],
};

export default multiMediaPostConfig;
