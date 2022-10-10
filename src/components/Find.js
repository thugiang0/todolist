import "../App.css";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchItemName } from "../redux/reducer/todolist";

function Find() {
  const state = useSelector((state) => state.todolistReducer);
  const dispatch = useDispatch();

  const nameInput = useRef();

  function handleSearchName(event) {
    event.preventDefault();
    dispatch(searchItemName(nameInput.current.value));
  }

  return (
    <>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            ref={nameInput}
            type="text"
            name="keyword"
            // value=""
            className="form-control"
            placeholder="Enter keyword..."
          />
          <span className="input-group-btn">
            <button
              onClick={handleSearchName}
              className="btn btn-primary"
              id="search"
              type="button"
            >
              <span className="fa fa-search mr-5"></span> Search
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Find;
