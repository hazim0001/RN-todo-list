import { Children } from "react";

let counter = 1;

const initialState = [];

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return [
        ...state,
        { id: counter++, title: action.payload, completedTask: false },
      ];
    case "completed":
      return state.map((todo) => {
        const completedToDo = todo.completedTask
          ? { completedTask: false }
          : { completedTask: true };
        return todo.id == action.payload
          ? Object.assign(todo, completedToDo)
          : todo;
      });
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      state;
  }
};

export default TodoReducer;
