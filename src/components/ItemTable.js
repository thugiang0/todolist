import "../App.css";

import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openForm, removeTodolist, editItem, deleteItem } from "../redux/reducer/todolist";

function ItemTable(props) {
  const { item, index } = props;
  const state = useSelector((state) => state.todolistReducer);
  const dispatch = useDispatch();

  const statusItem = useRef();

  function handleEdit(e) {
    e.preventDefault();
    console.log('G');
    dispatch(openForm("EDIT"));
    dispatch(editItem(item));
    
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteItem(item.id));
  }


  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td className="text-center">
          <span id="status" ref={statusItem} className="label label-info">
            {item.status ? "Active" : "Hide"}
          </span>
        </td>
        <td className="text-center">
          <button onClick={handleEdit} type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5"></span>Edit
          </button>
          &nbsp;
          <button onClick={handleDelete} type="button" className="btn btn-danger">
            <span className="fa fa-trash mr-5"></span>Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default ItemTable;
