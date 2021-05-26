import { Injectable } from '@angular/core';
import { RoomDetector, RoomTemperatureApiService } from '@api/room-temperature-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { concat, interval, Observable, of, race } from 'rxjs';
import { filter, map, mergeMap, takeUntil, withLatestFrom } from 'rxjs/operators';

import * as actions from './room-detectors.actions';
import { ApplicationState } from './room-detectors.reducer';
import * as selectors from './room-detectors.selectors';

const SYNC_FRAME_IN_MS = 2600;

function stopSyncingRoom$(id: number, action$: Observable<Action>) {
  // TODO
}

function fetchRoomTemperature$(roomTemperatureApiService: RoomTemperatureApiService, id: number) {
  // TODO
}

function syncRoomTemperatureTask$(
  roomTemperatureApiService: RoomTemperatureApiService,
  id: number,
  action$: Observable<Action>
) {
  //TODO
}

@Injectable()
export class RoomDetectorsEffects {
  private isRunning$ = this.store$.pipe(
    select(selectors.selectRoomDetectorsIsRunning),
  );

  // TODO: effect loadManyRoomDetectors$

  // TODO: effect startSingleRoomTracking$

  constructor(
    private actions$: Actions,
    private store$: Store<ApplicationState>,
    private roomTemperatureApiService: RoomTemperatureApiService,
  ) {
  }

}
