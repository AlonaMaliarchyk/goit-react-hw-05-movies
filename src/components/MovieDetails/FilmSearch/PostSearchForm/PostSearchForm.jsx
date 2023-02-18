
import PropTypes from "prop-types";
import css from "./PostSearchForm.module.css"

const PostSearchForm = ({ onSubmit }) => {
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(event.target.search.value);
        event.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="search"
                type="text"
                placeholder="Movie name">
                </input>
            <button  className={css.btn} type="submit">Search</button>    
        </form>
    )
}
export default PostSearchForm;
PostSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}