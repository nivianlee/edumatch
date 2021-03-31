export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostState {
  post: Post | {};
}

export interface PostsState {
  posts: Post[];
}

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_SELECTED_POST = "ADD_SELECTED_POST";
export const CLEAR_SELECTED_POST = "CLEAR_SELECTED_POST";

interface AddPostAction {
  type: typeof ADD_POST;
  payload: Post;
}

interface DeletePostAction {
  type: typeof DELETE_POST;
  payload: number;
}

interface AddSelectedPostAction {
  type: typeof ADD_SELECTED_POST;
  payload: Post;
}

interface ClearSelectedPostAction {
  type: typeof CLEAR_SELECTED_POST;
}

export type PostActionTypes =
  | AddPostAction
  | DeletePostAction
  | AddSelectedPostAction
  | ClearSelectedPostAction;
