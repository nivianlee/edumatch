import {
  PostState,
  PostsState,
  PostActionTypes,
  ADD_POST,
  DELETE_POST,
  ADD_SELECTED_POST,
  CLEAR_SELECTED_POST,
} from "./types";

const initialPostsState: PostsState = {
  posts: [],
};

const initialPostState: PostState = {
  post: {},
};

export function postsReducer(
  state = initialPostsState,
  action: PostActionTypes
): PostsState {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST:
      return {
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
}

export function postReducer(
  state = initialPostState,
  action: PostActionTypes
): PostState {
  switch (action.type) {
    case ADD_SELECTED_POST:
      return {
        post: action.payload,
      };
    case CLEAR_SELECTED_POST:
      return initialPostState;
    default:
      return state;
  }
}
