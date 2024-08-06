import RootLayout from '@/app/layout';
import { createBrowserRouter } from 'react-router-dom';
import Weather from './app/weather';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Weather />,
        },
      ],
    },
  ]);
