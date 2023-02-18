
import { Link, useLocation } from "react-router-dom";
import css from "./MovieSearchList.module.css";
import { getPosterPath } from "../ApiService/ApiService";

const MovieSearchList = ({ films }) => {
    const location = useLocation();
    const element = films.map(({ id, poster_path, title }) =>
        <Link to={`/movies/${id}`} className={css.wrapSearchList} key={id} state={{ from: location }}>
            <li className={css.seachList } >
                <img src={poster_path? getPosterPath(poster_path, 300): 'https://via.placeholder.com/320x480'} alt={title}></img>
            </li>
            <p>{title}</p>
        </Link>);
    return (
        <>
        <ul className={css.searchGallery}>
            {element}
        </ul>
        </>
    )
}
export default MovieSearchList;