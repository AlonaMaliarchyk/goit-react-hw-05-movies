import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewes }  from "../shared/ApiService/ApiService";
import Notiflix from 'notiflix';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!id) {
            return;
        }
        const fetchReviews = async () => {
            try {
                const data = await getReviewes(id);
                setReviews(data.results);
            } catch({response}) {
                Notiflix.Notify.failure('Oops – something went wrong!');
            }
        };
        fetchReviews();
    }, [id]);

    const element = reviews.map(({ id, author, content }) =>
        <li key={id}>
            <p>{ author }</p>
            <p>{ content }</p>
        </li>);

    return (
      <>
          { reviews && reviews.length > 0
              ? <ul>{element}</ul>
              : <div>We don't have any reviews for this movie</div>
          }
      </>
    )
};

export default Reviews;
