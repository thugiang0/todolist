import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { sortByName, sortByStatus } from "../redux/reducer/todolist";

function Sort() {
  const state = useSelector((state) => state.todolistReducer);
  const dispatch = useDispatch();

  function handleSortName(event) {
    event.preventDefault();
    dispatch(sortByName(event.currentTarget.textContent));
  }

  function handleSortStatus(event) {
    event.preventDefault();
    dispatch(sortByStatus(event.currentTarget.textContent));
  }

  return (
    <>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort <span className="fa fa-caret-square-o-down ml-5"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a role="button" className="sort_selected">
                <span
                  onClick={handleSortName}
                  className="fa fa-sort-alpha-asc pr-5"
                >
                  Name: A-Z
                </span>
              </a>
            </li>
            <li>
              <a role="button" className="">
                <span
                  onClick={handleSortName}
                  className="fa fa-sort-alpha-desc pr-5"
                >
                  Name: Z-A
                </span>
              </a>
            </li>
            <li role="separator" className="divider"></li>
            <li onClick={handleSortStatus}>
              <a role="button" className="">
                Status: active
              </a>
            </li>
            <li onClick={handleSortStatus}>
              <a role="button" className="">
                Status: hide
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sort;
