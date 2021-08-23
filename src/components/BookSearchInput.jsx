import { useState } from "react";
import { bookSearchRequest } from "../utils/books-api";

export const BookSearchInput = ({ update }) => {
  const [query, setQuery] = useState("");
  const searchBooks = (e) => {
    e.preventDefault();
    return bookSearchRequest(query).then((results) => update(results));
  };
  const updateQuery = ({ target }) => {
    const { value = "" } = target;
    setQuery(value);
  };

  return (
    <form className="search--wrap" onSubmit={searchBooks}>
      <input
        className="search--input"
        type="text"
        id="search-input"
        onChange={updateQuery}
      />
      <button
        className="search--button"
        type="submit"
        disabled={query ? "" : true}
        htmlFor="search--input"
      >
        Search
      </button>
    </form>
  );
};
