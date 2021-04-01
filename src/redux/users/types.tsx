export interface User {
  id: string;
  email: string;
}

export interface UserState {
  user: User | {};
}

export interface UsersState {
  users: User[];
}

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const ADD_SELECTED_USER = "ADD_SELECTED_USER";
export const CLEAR_SELECTED_USER = "CLEAR_SELECTED_USER";
export const CLEAR_USER = "CLEAR_USER";

interface AddUserAction {
  type: typeof ADD_USER;
  payload: User;
}

interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: User;
}

interface AddSelectedUserAction {
  type: typeof ADD_SELECTED_USER;
  payload: User;
}

interface ClearSelectedUserAction {
  type: typeof CLEAR_SELECTED_USER;
}

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

export type UserActionTypes =
  | AddUserAction
  | DeleteUserAction
  | AddSelectedUserAction
  | ClearSelectedUserAction
  | ClearUserAction;
