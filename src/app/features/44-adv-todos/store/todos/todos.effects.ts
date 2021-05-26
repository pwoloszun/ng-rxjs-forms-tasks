import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Todo } from '@api/models/todos.models';
import { TodosService } from '@api/todos.service';

import * as actions from './todos.actions';
import { ApplicationState } from './todos.reducer';
import { EMPTY } from 'rxjs';

@Injectable()
export class TodosEffects {

  loadManyTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.TodosActionTypes.LoadManyTodosRequest),
      // TODO
    );
  }, { dispatch: false });

  deleteSingleTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.TodosActionTypes.DeleteSingleTodoRequest),
      // TODO
    );
  }, { dispatch: false });

  createSingleTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.TodosActionTypes.CreateTodoRequest),
      // TODO: this.snackBarRef.open(`Some msg...`);
      // TODO
    );
  }, { dispatch: false });

  optimisticUpdateSingleTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.TodosActionTypes.OptimisticUpdateSingleTodoRequest),
      // TODO
    );
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private todosService: TodosService,
    private snackBarRef: MatSnackBar,
  ) {
  }

}
