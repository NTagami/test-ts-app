import produce from "immer";
import { Action, Reducer } from "redux";
import {
  Cmd,
  combineReducers,
  LiftedLoopReducer,
  loop,
  Loop
} from "redux-loop";

import {
  CommonAction,
  CommonActionType,
  dummyAction,
  TodoAction,
  TodoActionType
} from "./action";
import { CommonState, RootState, TodoState } from "./store";
import { connectRouter } from "connected-react-router";
import { History } from "history";

const initialTodoState: TodoState = {
  todos: []
};

const todoReducer = (
  state: TodoState = initialTodoState,
  action: TodoAction
): TodoState | Loop<TodoState, Action> => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return loop(
        produce(state, draft => {
          draft.todos.push(action.payload.todo);
        }),
        Cmd.action(dummyAction(action.payload.todo.title))
      );
    default:
      //const _: never = t;
      return state;
  }
};

const commonReducer: Reducer<CommonState, CommonAction> = (
  state: CommonState = { dummy: "", error: null },
  action: CommonAction
): CommonState => {
  switch (action.type) {
    case CommonActionType.DUMMY:
      return state;
    case CommonActionType.ERROR:
      return produce(state, draft => {
        draft.error = action.payload.message;
      });
    case CommonActionType.CLEAR_ERROR:
      return produce(state, draft => {
        draft.error = null;
      });

    default:
      //const _: never = t;
      return state;
  }
};

export const createReducer: (
  h: History
) => LiftedLoopReducer<RootState> = history =>
  combineReducers({
    router: connectRouter(history),
    todoState: todoReducer,
    common: commonReducer
  } as any); // TODO: FIX!
