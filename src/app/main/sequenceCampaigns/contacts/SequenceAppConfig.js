import { lazy } from "react";

const SequenceApp = lazy(() => import("./SequenceApp"));
const AddUser = lazy(() => import("./AddUser"));

const SequenceAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/sequenceCampaigns/viewCampaign",
      element: <SequenceApp />,
    },
    {
      path: "/sequenceCampaigns/viewCampaign/addUser",
      element: <AddUser />,
    },
  ],
};

export default SequenceAppConfig;
