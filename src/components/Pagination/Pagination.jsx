import { Link } from "react-router-dom";

import "./Pagination.scss";

const Pagination = ({ urlId, goToNextPage, goToPrevPage, nextPage, prevPage }) => {
  console.log(urlId)
  return(
    <div className="pagination-container">
      {prevPage === null ? null : <Link to={`/pokedex/${urlId - 1}`} onClick={goToPrevPage}>Previous</Link>}
      {nextPage === null ? null : <Link to={`/pokedex/${urlId === undefined ? 1 : Number(urlId) + 1}`} onClick={goToNextPage}>Next</Link>}
    </div>
  );
};

export default Pagination;