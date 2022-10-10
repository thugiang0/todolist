import { useRef } from "react";
import "../App.css";
import ItemTable from "./ItemTable";

import { useSelector, useDispatch } from "react-redux";
import { searchItemName, searchItemStatus } from "../redux/reducer/todolist";

function Table() {
  const state = useSelector((state) => state.todolistReducer);
  const dispatch = useDispatch();
  const searchName = useRef();
  const searchStatus = useRef();

  function handleFilterName(event) {
    event.preventDefault();
    dispatch(searchItemName(searchName.current.value));
  }

  function handleFilterStatus(event) {
    event.preventDefault();
    dispatch(searchItemStatus(searchStatus.current.value));
  }

  return (
    <>
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="text-center">NO</th>
                <th className="text-center">Name</th>
                <th className="text-center">Status</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    onChange={handleFilterName}
                    ref={searchName}
                    type="text"
                    className="form-control"
                    name="filterName"
                  />
                </td>
                <td>
                  <select onChange={handleFilterStatus} ref={searchStatus} className="form-control" name="filterStatus">
                    <option value="-1">All</option>
                    <option value="0">Hide</option>
                    <option value="1">Active</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {state.dataRender.map((item, index) => {
                return <ItemTable key={item.id} item={item} index={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Table;
