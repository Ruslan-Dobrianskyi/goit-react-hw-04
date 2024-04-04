import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ query, setQuery, onClick }) => {
  const notify = () => toast("Field is empty");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      notify();
    } else {
      onClick(e);
    }
  };
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="query"
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={s.button} type="submit">
          <IoSearch className={s.icon} />
        </button>
        <Toaster position="right-top" />
      </form>
    </>
  );
};

export default SearchBar;
