import { lazy } from 'react';
import CreateNewPost from './CreateNewPage';
const MultiMediaPageApp = lazy(() => import('./MultiMediaPageApp'));
const multiMediaPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/facebook/instagram/pages',
      element: <MultiMediaPageApp />,
    },
    
    // {
    //   path :"/facebook/instagram/multiMediaPost/MultiMediaPageApp/CreateNewPost",
    //  element: <CreateNewPost/>
    // }                       
  ],
};

export default multiMediaPagesConfig;
