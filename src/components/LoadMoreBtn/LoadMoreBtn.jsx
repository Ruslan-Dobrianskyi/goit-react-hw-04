import s from "./LoadMoreBtn.module.css";
import PropTypes from "prop-types";
const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={s.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
