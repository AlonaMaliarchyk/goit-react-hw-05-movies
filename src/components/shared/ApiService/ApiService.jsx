import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

// const BIG_POSTER_PATH = `https://image.tmdb.org/t/p/original`;
const SMALL_POSTER_PATH = `https://image.tmdb.org/t/p/w`;


export const getTrendingMovies = async() => {
    const { data } = await instance.get(`movie/popular?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US&page=1`);
    return data;
}

export const getMovieById = async (movie_id) => {
    const { data } = await instance.get(`movie/${movie_id}?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US&page=1`);
    return data;
}


export const getSearchMovie = async (title) => {
    const { data } = await instance.get(`search/movie?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US&page=1&include_adult=false&query=${title}`);
    return data;
}

export const getReviewes = async (id) => {
    const { data } = await instance.get(`movie/${id}/reviews?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US&page=1`);
    return data;
}

export const getCast = async (id) => {
    const { data } = await instance.get(`movie/${id}/credits?api_key=1db949d546d8184041e5d93169d90d9f&language=en-US`);
    return data;
}

export const getPosterPath = (path, width = 500) => {
    return path ? SMALL_POSTER_PATH + width + path : 'https://via.placeholder.com/';
}