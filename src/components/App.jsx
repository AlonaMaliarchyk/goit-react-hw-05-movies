import { lazy,Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const NavBar = lazy(()=> import ('./NavBar'));
const HomePage = lazy(()=> import ('../page/HomePage'));
const MoviesPage = lazy(()=> import ('../page/MoviesPage'));
const NotFoundPage = lazy(()=> import ('../page/NotFoundPage'));
const MovieDetails = lazy(()=> import ('../page/MovieDetails'));
const Cast = lazy(()=> import ('./Cast/Cast'));
const Reviews = lazy(()=> import ('./Reviews/Reviews'));


export default function App() {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
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


