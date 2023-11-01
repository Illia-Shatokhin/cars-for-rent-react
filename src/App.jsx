import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import FirstPage from './pages/CatalogPage/FirstPage';
import SecondPage from './pages/FavoritesPage/SecondPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/catalog" element={<FirstPage />} />
          <Route path="/favorites" element={<SecondPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
