import { lazy } from 'react';
import CreateNewPost from './CreateNewPost';
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
    {
      path :"/facebook/instagram/multiMediaPost/MultiMediaPostApp/CreateNewPost",
     element: <CreateNewPost/>
    }                       
  ],
};

export default multiMediaPostConfig;
