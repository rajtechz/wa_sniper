import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ModernForgotPasswordPage = lazy(() => import('./ModernForgotPasswordPage'));


const forgotPasswordPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/forgot-password',
      children: [
        {
          path: '',
          element: <Navigate to="classic" />,
        },
        
        {
          path: 'modern',
          element: <ModernForgotPasswordPage />,
        },
        
      ],
    },
  ],
};

export default forgotPasswordPagesConfig;
