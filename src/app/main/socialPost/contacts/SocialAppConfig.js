import { lazy } from "react";

const SocialApp = lazy(() => import("./SocialApp"));
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
  
  ],
};

export default SocialAppConfig;
