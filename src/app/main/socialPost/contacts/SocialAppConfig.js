import { lazy } from "react";

const SocialApp = lazy(() => import("./SocialApp"));
const FacebookAndInstaPost = lazy(() => import("./FacebookAndInstaPost"));

const SocialAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/socialPost/contactGroups",
      element: <SocialApp />,
    },
    {
      path :"/socialPost/contactGroups/FacebookAndInstaPost",
      element:<FacebookAndInstaPost/>
    }
  
  ],
};

export default SocialAppConfig;
