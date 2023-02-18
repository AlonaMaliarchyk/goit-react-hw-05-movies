import { Link, useParams, useNavigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback} from "react";
import { getMovieById, getPosterPath } from "../shared/ApiService/ApiService";
import css from "./MovieDetails.module.css";
import Notiflix from 'notiflix';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const  from  = location.state?.from || "/";

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const resalt = await getMovieById(id);
                setMovie(resalt);
            }
            catch({response}) {
                Notiflix.Notify.failure('Oops – something went wrong!');
            }
        }
        fetchMovie();
    }, [id])

    // В даному випадку не потрібна функція так,як відмальовується один раз,але в інших потрібно
    // const goBack = useCallback(() => navigate(-1), [navigate])

    // якщо просто повісити на onClick
    // onClick={() => navigate(location.state.from.pathname)}

    const goBack = useCallback(() => navigate(from), [navigate, from])
    return(
        <>
            <div className={css.container}>
            <button onClick={goBack} className={css.btn}>Go back</button>
            <div className={css.galleryWrap}>
                <div className={css.wrapImg}>
                    <img className={ css.movieDetal} src={getPosterPath(movie?.poster_path)} alt={movie?.title}></img>
                </div>
                <div className={css.warapInform}>
                    <div>
                        <h1>{movie?.title} ({movie?.release_date.slice(0, 4)})</h1>
                        <h3>User Score { Math.floor(movie?.vote_average) * 10 } % </h3>
                        <h3>Overview</h3>
                        <p>{movie?.overview}</p>
                        <h3>Genres</h3>
                        <p>{movie?.genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                </div>
            </div>
            <hr />
            
            <h3>Addition information</h3>
            <div className={css.wrap}>
                <Link className={css.link} to="cast" state={{from}}>Cast</Link>
                <Link className={css.link} to="reviews" state={{from}}>Reviews</Link>
            </div>
            <hr />
            <Outlet/>
        </div>
    </>
    )
}
export default MovieDetails;