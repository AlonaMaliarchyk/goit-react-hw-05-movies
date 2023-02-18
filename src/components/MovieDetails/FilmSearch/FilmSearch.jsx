import {getSearchMovie}  from "../../shared/ApiService/ApiService";
import { useState, useEffect } from "react";
import PostSearchForm from "./PostSearchForm/PostSearchForm";
import MovieSearchList from "../../shared/MovieSearchList/MovieSearchList";
import { useSearchParams } from "react-router-dom";
import Notiflix from 'notiflix';

const FilmSerch = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchMovie = (value) => {
        if (value) {
            setSearchParams({ 'query': value });
        } 
    }
    const query = searchParams.get('query');

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                if (!query) {
                    return;
                }
                const data = await getSearchMovie(query);
                setMovies(prevFilms => (data.results));
            }
            catch  {
                Notiflix.Notify.failure('Oops – something went wrong!');
            }
        }
        fetchMovie();
    }, [query]);
    return (
        <>
            <PostSearchForm onSubmit={searchMovie} />
            <MovieSearchList films={ movies } />
        </>
    )
}

export default FilmSerch;