import "./Pagination.scss";

const Pagination = (props) => {
  return(
    <div className="pagination-container">
      {props.goToPrevPage && <button onClick={props.goToPrevPage}>Previous</button>}
      <button onClick={props.goToNextPage}>Next</button>
    </div>
  );
};

export default Pagination;