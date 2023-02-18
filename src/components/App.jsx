import { lazy,Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const NavBar = lazy(()=> import ('./NavBar'));
const HomePage = lazy(()=> import ('./page/HomePage'));
const MoviesPage = lazy(()=> import ('./page/MoviesPage'));
const NotFoundPage = lazy(()=> import ('./page/NotFoundPage'));
const MovieDetails = lazy(()=> import ('./MovieDetails'));
const Cast = lazy(()=> import ('./MovieDetails/Cast/Cast'));
const Reviews = lazy(()=> import ('./MovieDetails/Reviews/Reviews'));


export default function App() {
  return (
    <Suspense>
      <Routes fallback={<p>...Loading</p>}>
        <Route path='/' element={<NavBar/>}>
        <Route index element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:id' element={< MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element= {<Reviews />} />
        </Route>
        </Route>
        <Route path='*' element={<NotFoundPage/> } />
      </Routes>
      </Suspense>
  );
};
// <Navigate to="dashboard" replace={true}/>
// коли не знайшло сторінку,то перекидає на home а truе не зберігає запит в URL
// !! Можна віднести в окремий компонент import and Routes


