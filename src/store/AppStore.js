import { createStore, combineReducers } from "redux";
import TodoReducer from "../reducers/TodoReducer";
import PostReducer from "../reducers/PostReducer";

const rootReducer = combineReducers({
  post: PostReducer,
  todo: TodoReducer,
});

const AppStore = createStore(rootReducer);
// console.log(AppStore.getState());

export default AppStore;
