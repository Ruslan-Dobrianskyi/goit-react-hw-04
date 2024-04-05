import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Field is empty");
    } else {
      onSubmit(query);
      setQuery("");
    }
  };

  return (
    <>
      <header>
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
        </form>
      </header>
      <Toaster position="top-right" />
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
