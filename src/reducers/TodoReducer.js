let counter = 1;

// const initialState = ;

const TodoReducer = (state, action) => {
  if (typeof state === "undefined") {
    return (state = []);
  }
  switch (action.type) {
    case "ADDTODO":
      console.log("from add");
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
      return (state = []);
  }
};

export default TodoReducer;
