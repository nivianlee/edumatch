import { combineReducers } from "redux";
import { todosReducer, todoReducer } from "./todos/reducers";
import { postsReducer } from "./posts/reducers";
import { userReducer } from "./users/reducers";

export const rootReducer = combineReducers({
  todos: todosReducer,
  todo: todoReducer,
  posts: postsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
