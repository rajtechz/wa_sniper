import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ModernSignOutPage = lazy(() => import('./ModernSignOutPage'));

const signOutPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/sign-out',
      children: [
        {
          path: '',
          element: <Navigate to="classic" />,
        },
        
       
        {
          path: 'modern',
          element: <ModernSignOutPage />,
        },
        
      ],
    },
  ],
};

export default signOutPagesConfig;
