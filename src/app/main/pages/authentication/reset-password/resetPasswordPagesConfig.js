import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ModernResetPasswordPage = lazy(() => import('./ModernResetPasswordPage'));


const resetPasswordPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/reset-password',
      children: [
        {
          path: '',
          element: <Navigate to="classic" />,
        },
       
        {
          path: 'modern',
          element: <ModernResetPasswordPage />,
        },
        
      ],
    },
  ],
};

export default resetPasswordPagesConfig;
