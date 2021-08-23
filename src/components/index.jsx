import { useState } from "react";
import { BookSearchInput } from "./BookSearchInput";
import { BookResult } from "./BookResult";

const mapResults = ({ cover_i = '', title, author_name = [] }) => {
  const coverBase = `https://covers.openlibrary.org/b/id/`;
  const resultProps = {
    title,
    cover: `${coverBase}${cover_i}-M.jpg`,
    author: author_name[0],
  };
  return <BookResult {...resultProps} />;
};

export const BasicSearch = () => {
  const [results, setResults] = useState(null);

  return (
    <section className="book-search--wrap">
      <div className="search--title">
        Search for books
      </div>
      <BookSearchInput update={setResults} />
      <div className="book--results">
        {results && results.docs.map(mapResults)}
      </div>
    </section>
  );
};
