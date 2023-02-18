import {useParams} from "react-router-dom";
import { useState, useEffect, } from "react";
import  {getCast, getPosterPath} from "../../shared/ApiService/ApiService";
import css from "./Cast.module.css"

const Cast = () => {

    const { id } = useParams();
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const data = await getCast(id);
                setCast(data.cast);
            } catch ({ respons }) {
                    setError(error.message);
            }
        }
        fetchCast();
    }, [id, error])
    
    const element = cast.map(({ id, profile_path, name }) =>
        <li key={id} className={css.castItem}>
            <img src={profile_path? getPosterPath(profile_path): 'https://via.placeholder.com/30x45'} alt={name}></img>
            <p> {name}</p> 
        </li>)
    return (
    <>
        { cast && cast.length > 0
                ? <ul className={css.castGallery}>{element}</ul>
                : <div>We don't have any cast for this movie</div>
            }
    </>
        
)
}
export default Cast;