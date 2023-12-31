import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import fallbackRender from './error-boundary/fallbackRender';
import Footer from './footer';
import HeaderComponent from './header';

const LayoutComponent = () => {
  return (
    <div className="h-full mx-auto ">
      <HeaderComponent />
      <div className="w-full dark:bg-[#02080f] bg-opacity-100 ">
        <div className="px-4 py-20 flex flex-col w-4/5 mx-auto ">
          <ErrorBoundary fallbackRender={fallbackRender}>
            <Suspense
              fallback={
                <div className="w-full h-full flex justify-center items-center">
                  <span>Loading...</span>
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutComponent;
