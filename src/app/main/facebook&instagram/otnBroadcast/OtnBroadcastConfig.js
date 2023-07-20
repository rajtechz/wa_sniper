import { lazy } from 'react';
import Campaign from './Campaign';

const OtnBroadcast = lazy(() => import('./OtnBroadcast'));



const otnbroadcastConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/facebook/instagram/otn/Broadcast',
      element: <OtnBroadcast />,
    },
    {
      path :"/facebook/instagram/otn/campaign",
     element: <Campaign/>
    }
  ],
};

export default otnbroadcastConfig;
