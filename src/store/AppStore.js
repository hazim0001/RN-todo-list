import { createStore, combineReducers, applyMiddleware } from "redux";
import TodoReducer from "../reducers/TodoReducer";
import PostReducer from "../reducers/PostReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const rootReducer = combineReducers({
  post: PostReducer,
  todo: TodoReducer,
});

const AppStore = createStore(rootReducer, composedEnhancer);
// console.log(AppStore.getState());

export default AppStore;
