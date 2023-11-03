import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import SecondPage from './pages/FavoritesPage/SecondPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<SecondPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
