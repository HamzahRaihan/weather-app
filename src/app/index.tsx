import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './routes';
import { ThemeProvider } from '@/context/theme-provider';

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
