import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={s.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
