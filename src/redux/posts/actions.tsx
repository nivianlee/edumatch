import {
  Post,
  ADD_POST,
  DELETE_POST,
  ADD_SELECTED_POST,
  CLEAR_SELECTED_POST,
  PostActionTypes,
} from "./types";

// TypeScript infers that this function is returning AddPostAction
export function addPost(newPost: Post): PostActionTypes {
  return {
    type: ADD_POST,
    payload: newPost,
  };
}

// TypeScript infers that this function is returning DeletePostAction
export function deletePost(id: number): PostActionTypes {
  return {
    type: DELETE_POST,
    payload: id,
  };
}

// TypeScript infers that this function is returning AddSelectedPostAction
export function addSelectedPost(selectedPost: Post): PostActionTypes {
  return {
    type: ADD_SELECTED_POST,
    payload: selectedPost,
  };
}

// TypeScript infers that this function is returning ClearSelectedPostAction
export function clearSelectedPost(): PostActionTypes {
  return {
    type: CLEAR_SELECTED_POST,
  };
}
