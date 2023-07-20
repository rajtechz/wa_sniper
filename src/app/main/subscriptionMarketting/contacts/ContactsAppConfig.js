import { lazy } from "react";

const ContactsApp = lazy(() => import("./ContactsApp"));
const AddUser = lazy(() => import("./AddUser"));
const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "/subscriptionMarketting/contactGroups",
      element: <ContactsApp />,
    },
    {
      path: "/subscriptionMarketting/contactGroups/addUser",
      element: <AddUser />,
    },
  ],
};

export default ContactsAppConfig;
