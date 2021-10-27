import { Children } from "react";

let counter = 1;

const initialState = [];

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return [...state, { id: counter++, title: action.payload }];

    default:
      state;
  }
};

export default TodoReducer;
