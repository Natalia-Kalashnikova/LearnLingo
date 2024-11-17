import { lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import NotFoundPage from '../NotFound/NotFoundPage.jsx';
import { useAuth } from '../../hooks/auth.js';

const HomePage = lazy(() => import('../HomePage/HomePage.jsx'));
const TeachersPage = lazy(() => import('../TeachersPage/TeachersPage.jsx'));
const FavoritesPage = lazy(() => import('../FavoritesPage/FavoritesPage.jsx'));

function App() {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (location.pathname === "/") {
    location.pathname = "/home";
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        {isAuth ? (
          <Route path="/favorites" element={<FavoritesPage />} />
        ) : (
            <Route path="/home" element={<Navigate redirectTo="/home" />} />  
        )
      }
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;


