import "../App.css";
import { makeId } from "../util";
import { useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {openForm, closeForm, addData, editData, editItem} from "../redux/reducer/todolist"


function Form(props) {

  const state = useSelector((state) => state.todolistReducer);
  const dispatch = useDispatch();

  const name = useRef();
  const status = useRef();

  function handleCloseForm(event) {
    event.preventDefault();
    dispatch(closeForm());
  }

  function clearForm() {
    name.current.value = "";
    status.current.value = 1;
    dispatch(openForm("ADD"));

  }

  function handleSubmit(event) {
    event.preventDefault();
    const currentName = name.current.value;
    const currentStatus = status.current.value === "1" ? true : false;

    if (state.type === "ADD") {
      const newData = {
        id: makeId(),
        name: currentName,
        status: currentStatus,
      };
      console.log(newData);
      dispatch(addData(newData));
      clearForm();

    } else {
      const newData = {
        id: makeId(),
        name: currentName,
        status: currentStatus,
      };
      dispatch(editData(newData));
      clearForm();
      
      
    }
    // clearForm();
  }

  useEffect(() => {
    if (state.type === "EDIT") {
      name.current.value = state.editItem.name;
      status.current.value = state.editItem.status == true ? 1 : 0;
    }
  });

  return (
    <>
      <div className="panel-warning">
        <div className="panel-heading">
          <h4 className="panel-title">
          {state.type === "EDIT" ? "UPDATE" : "ADD"}
            <span onClick={handleCloseForm} className="fa fa-times-circle text-right " id="hide"></span>
            {/* <i class="fa fa-plus" aria-hidden="true"></i> */}
          </h4>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Name :</label>
              <input
                ref={name}
                type="text"
                className="form-control"
                name="name"
                id="setName"
              />
            </div>
            <label>Status :</label>
            <select ref={status} className="form-control" name="status" id="setStatus">
              <option value={1}>Active</option>
              <option value={0}>Hide</option>
            </select>
            <br />
            <div className="text-center">
              <button onClick={handleSubmit} type="submit" className="btn btn-warning">
                <span className="fa fa-plus mr-5"></span>Save
              </button>
              &nbsp;
              <button onClick={clearForm} type="button" className="btn btn-danger">
                <span className="fa fa-close mr-5"></span>Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
