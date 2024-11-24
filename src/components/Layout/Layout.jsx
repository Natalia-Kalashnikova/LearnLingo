import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Loader from '../Loader/Loader.jsx';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
