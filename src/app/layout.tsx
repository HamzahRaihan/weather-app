import Navigation from '@/components/ui/navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    <div className="container flex flex-col gap-2 max-w-screen p-5">
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            loading
          </div>
        }
      >
        <Navigation />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
