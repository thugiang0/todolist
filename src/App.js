import "./App.css";
import Form from "./components/Form";
import Find from "./components/Find";
import Sort from "./components/Sort";
import Table from "./components/Table";
import ItemTable from "./components/ItemTable";
import React, { Comp, useEffect } from "react";
// import { makeId } from "./util";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { openForm } from "./redux/reducer/todolist";

function App() {
  const state = useSelector((state) => state.todolistReducer);
  const dispatch = useDispatch();

  function handleOpenForm(event) {
    event.preventDefault();
    dispatch(openForm());
  }

  return (
    <>
      <div className="container">
        <div id="head" className="text-center">
          <h1>TO-DO LIST</h1>
          <hr />
        </div>
        <div className="row">
          <div className={state.show ? "col-4" : "d-none"}>
            <Form />
          </div>
          <div className={state.show ? "col-8" : "col-12"}>
            <button
              onClick={handleOpenForm}
              type="button"
              className="btn btn-primary"
              id="add"
            >
              <span className="fa fa-plus mr-5"></span>ADD
            </button>
            <div className="row mt-15">
              <Find />
              <Sort />
            </div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
