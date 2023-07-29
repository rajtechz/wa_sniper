import { lazy } from 'react';
import CreateCtaPost from './CreateCtaPost';
const CtaPostApp = lazy(() => import('./CtaPostApp'));
const ctaPostConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/facebook/instagram/ctaPost',
      element: <CtaPostApp />,
    },
    {
      path :"/facebook/instagram/ctaPost",
     element: <CreateCtaPost/>
    }                       
  ],
};

export default ctaPostConfig;
