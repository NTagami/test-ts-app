import { Action } from "redux";
import { Todo, toTodoId } from "./types";
import { createAction, ActionType } from "typesafe-actions";

export const addTodo = createAction("ADD_TODO", (todo: string) => ({
  todo: {
    id: toTodoId("dummy"),
    title: todo
  }
}))();
/*
export enum CommonActionType {
  DUMMY = "DUMMY",
  ERROR = "ERROR",
  CLEAR_ERROR = "CLEAR_ERROR"
}*/

export const dummyAction = createAction("DUMMY", (message: string) => ({
  message
}))();
export const errorMessage = createAction("ERROR", (message: string) => ({
  message
}))();
export const clearError = createAction("CLEAR_ERROR")();
/*
export interface Dummy extends Action {
  type: CommonActionType.DUMMY;
  payload: {
    message: string;
  };
}

export interface ErrorMessage extends Action {
  type: CommonActionType.ERROR;
  payload: {
    message: string;
  };
}

export interface ClearErrorMessage extends Action {
  type: CommonActionType.CLEAR_ERROR;
}
*/
export type TodoAction = ActionType<typeof addTodo>;
export type CommonAction =
  | ActionType<typeof dummyAction>
  | ActionType<typeof errorMessage>
  | ActionType<typeof clearError>;
/*
export function dummyAction(message: string): Dummy {
  return {
    payload: { message },
    type: CommonActionType.DUMMY
  };
}

export function errorMessage(message: string): ErrorMessage {
  return {
    payload: { message },
    type: CommonActionType.ERROR
  };
}
*/
