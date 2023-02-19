import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import {getCast, getPosterPath} from "../shared/ApiService/ApiService";
import css from "./Cast.module.css"
import Notiflix from 'notiflix';

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const data = await getCast(id);
                const cast = [];
                data.cast.forEach(element => {
                  const alreadyExistElement = cast.find(existingElement => existingElement.id === element.id);
                  if (!alreadyExistElement) {
                    cast.push(element);
                  }
                });

                setCast(cast);
            } catch ({ response }) {
                Notiflix.Notify.failure('Oops – something went wrong!');
            }
        };
        fetchCast();
    }, [id]);

    const element = cast.map(({ id, profile_path, name }) =>
        <li key={id} className={css.castItem}>
            <img src={ getPosterPath(profile_path, 200) } alt={name}/>
            <p> {name}</p>
        </li>);
    return (
    <>
        { cast && cast.length > 0
                ? <ul className={css.castGallery}>{element}</ul>
                : <div>We don't have any cast for this movie</div>
            }
    </>
)
};
export default Cast;
