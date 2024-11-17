import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';
import NotFoundPage from '../NotFound/NotFoundPage.jsx';

const HomePage = lazy(() => import('../HomePage/HomePage.jsx'));
const TeachersPage = lazy(() => import('../TeachersPage/TeachersPage.jsx'));
const FavoritesPage = lazy(() => import('../FavoritesPage/FavoritesPage.jsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App
