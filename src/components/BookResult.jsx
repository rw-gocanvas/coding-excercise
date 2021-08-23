export const BookResult = ({ title, author, cover, published }) => (
  <div className="book--result">
    <img className="book--cover" src={cover} />
    <div className="book--meta">
      <div className="book--title">{title}</div>
      <div className="book--author">{author}</div>
      <div className="book--published">{published}</div>
    </div>
  </div>
);
