import { produce, Draft } from 'immer';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as actions from './todos.actions';
import { Todo } from '@api/models/todos.models';

export const todosFeatureKey = 'todosFeature';

interface TodoEntityState extends EntityState<Todo> {
}

export enum TodoStatus {
  Persisted = 'PERSISTED',
  Saving = 'SAVING',
  Removing = 'REMOVING',
  Editing = 'EDITING',
}

export interface SliceState {
  // domain/entities state
  todos: TodoEntityState;

  // feature/app logic state
  isFetchingMany: boolean;
  todosStatuses: { [id: number]: TodoStatus; };
}

export const todoEntityAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: SliceState = {
  todos: todoEntityAdapter.getInitialState(),

  isFetchingMany: false,
  todosStatuses: {},
};

const todosReducer = createReducer(
  initialState,

  on(actions.loadManyTodosRequest, (state) => {
    return produce(state, (draftState: Draft<SliceState>) => {
      draftState.isFetchingMany = true;
    });
  }),
  // TODO: actions.loadManyTodosSuccess

  // TODO: edition
  // TODO: removal
  // TODO: optimistic update
);

export function reducer(state: SliceState | undefined, action: Action): SliceState {
  return todosReducer(state, action);
}

// App slice STATE
export interface ApplicationState {
  [todosFeatureKey]: SliceState; // IMPORTANT: prop name must equal featureName
}
