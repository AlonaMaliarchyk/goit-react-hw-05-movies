import {useParams} from "react-router-dom";
import { useState, useEffect, } from "react";
import  {getReviewes}  from "../../shared/ApiService/ApiService";
import Notiflix from 'notiflix';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }
        const fethReviews = async () => {
            try {
                const data = await getReviewes(id);
                setReviews(data.results);
            }
            catch({response}){
                setError(error.message);
                Notiflix.Notify.failure('Oops – something went wrong!');
            }
            finally {
            }
        }
        fethReviews();
    }, [id, error]);

    const element = reviews.map(({ id, author, content }) =>
        <li key={id}>
            <p>{ author }</p> 
            <p>{ content }</p> 
        </li>)
    return (
    <>
            { reviews && reviews.length > 0
                ? <ul>{element}</ul>
                : <div>We don't have any reviews for this movie</div>
            }
    </>
    )
}

export default Reviews;


/*
<p>{author ? author :`We don't have any reviews for this movie`}</p> 
<p>{content ? content :`We don't have any reviews for this movie`}</p> 
*/