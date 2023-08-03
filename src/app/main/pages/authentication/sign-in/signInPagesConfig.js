import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
const ModernSignInPage = lazy(() => import('./ModernSignInPage'));
const signInPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/sign-in',
      children: [
        {
          path: '',
          element: <Navigate to="classic" />,
        },  
        {
          path: 'modern',
          element: <ModernSignInPage />,
        },
      ],
    },
  ],
};

export default signInPagesConfig;
