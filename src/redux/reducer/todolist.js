import { createSlice } from "@reduxjs/toolkit";

const dataLocalStorage = JSON.parse(localStorage.getItem("data"));

const initialState = {
  data: dataLocalStorage || [],
  dataRender: dataLocalStorage || [],
  show: true,
  type: "ADD",
  editItem: null,
};

export const todolistReducer = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    openForm: (state, action) => {
      state.show = true;
      state.type = action.payload;
    },
    closeForm: (state, action) => {
      state.show = false;
    },

    addData: (state, action) => {
      const newData = [...state.data, action.payload];
      state.data = newData;
      state.dataRender = newData;
      localStorage.setItem("data", JSON.stringify(newData));
    },

    editItem: (state, action) => {
      state.editItem = action.payload;
    },

    editData: (state, action) => {
      const dataState = JSON.parse(JSON.stringify(state.data));
      const itemEdit = JSON.parse(JSON.stringify(state.editItem));
      const results = [];
      dataState.map((item) => {
        if (item.id !== itemEdit.id) {
          results.push(item);
        } else {
          results.push(action.payload);
        }
      });
      state.data = results;
      state.dataRender = results;
      state.show = true;
      localStorage.setItem("data", JSON.stringify(results));
    },

    deleteItem: (state, action) => {
      const dataState = JSON.parse(JSON.stringify(state.data));
      const result = [];
      dataState.forEach((item) => {
        if (item.id !== action.payload) {
          result.push(item);
        }
      });
      state.data = result;
      state.dataRender = result;
      localStorage.setItem("data", JSON.stringify(result));
    },

    searchItemName: (state, action) => {
      const dataState = JSON.parse(JSON.stringify(state.data));
      const results = [];
      dataState.forEach((item) => {
        if (item.name.toLowerCase().includes(action.payload.toLowerCase())) {
          results.push(item);
        }
      });
      state.dataRender = results;
    },

    searchItemStatus: (state, action) => {
      const dataState = JSON.parse(JSON.stringify(state.data));
      const result = [];
      switch (action.payload) {
        case "0":
          dataState.forEach((item) => {
            if (!item.status) {
              result.push(item);
            }
          });
          state.dataRender = result;
          break;

        case "1":
          dataState.forEach((item) => {
            if (item.status) {
              result.push(item);
            }
          });
          state.dataRender = result;
          break;

        default:
          state.dataRender = dataState;
          break;
      }
    },

    sortByName: (state, action) => {
      const dataState = JSON.parse(JSON.stringify(state.data));
      if (action.payload === "Tên A-Z") {
        const sortedData = dataState.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
        state.dataRender = sortedData;
      }

      if (action.payload === "Tên Z-A") {
        const sortedData = dataState.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
        );
        state.dataRender = sortedData;
      }
    },

    sortByStatus: (state, action) => {
      const dataState = JSON.parse(JSON.stringify(state.data));
      if (action.payload === "Trạng Thái Kích Hoạt") {
        const sortedData = dataState.sort((item) => (item.status ? -1 : 1));
        state.dataRender = sortedData;
      }

      if (action.payload === "Trạng Thái Ẩn") {
        const sortedData = dataState.sort((item) => (!item.status ? -1 : 1));
        state.dataRender = sortedData;
      }
    },
  },
});

export const {
  openForm,
  closeForm,
  addData,
  editData,
  editItem,
  deleteItem,
  searchItemName,
  searchItemStatus,
  sortByName,
  sortByStatus,
} = todolistReducer.actions;

export default todolistReducer.reducer;
