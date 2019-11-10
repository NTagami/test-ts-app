import { Action } from "redux";
import { Todo, toTodoId } from "./types";

//export const ADD_TODO = "ADD_TODO"; //as const;

export enum TodoActionType {
  ADD_TODO = "ADD_TODO"
}

export enum CommonActionType {
  DUMMY = "DUMMY",
  ERROR = "ERROR",
  CLEAR_ERROR = "CLEAR_ERROR"
}

export interface AddTodo extends Action {
  type: TodoActionType.ADD_TODO;
  payload: {
    todo: Todo;
  };
}

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

export type TodoAction = AddTodo;
export type CommonAction = Dummy | ErrorMessage | ClearErrorMessage;

export function addTodoAction(todo: string): AddTodo {
  return {
    payload: {
      todo: {
        id: toTodoId("dummy"),
        title: todo
      }
    },
    type: TodoActionType.ADD_TODO
  };
}

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
