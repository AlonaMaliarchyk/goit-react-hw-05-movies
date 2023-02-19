import MovieSearchList from "../../../components/shared/MovieSearchList/MovieSearchList";
import { useState, useEffect } from "react";
import { getTrendingMovies } from "../../../components/shared/ApiService/ApiService";
import Notiflix from 'notiflix';


const TrendingMovie = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const data = await getTrendingMovies();
                setFilms(prevFilms => (data.results));
            }
            catch {
                Notiflix.Notify.failure('Oops – something went wrong!');
            }
        };
        fetchMovie();
    }, []);


    return <MovieSearchList films={films} />
};
export default TrendingMovie;
