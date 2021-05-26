import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ErrorModalComponent } from '@shared/error-modal/error-modal.component';
import { FakeApiService } from '@api/fake-api.service';
import { fullObserver } from '@app/utils';
import { catchError, finalize, retry } from 'rxjs/operators';
import { of, EMPTY, Subscription } from 'rxjs';


@Component({
  selector: 'nts-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {

  private sub: Subscription | null = null;

  constructor(
    private fakeApiService: FakeApiService,
    private matSnackBar: MatSnackBar
  ) {
  }

  handleDownloadUser() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub = this.fakeApiService.failedRequest$('/users/100', 'Cant fetch user with ID=100')
      .pipe(
        retry(2),
        catchError((err) => {
          this.openErrorSnackBar(err.message, 10);
          this.fakeApiService.successfulRequest$('/log/error', { err }).subscribe();
          return EMPTY;
        })
      ).subscribe(fullObserver('handleDownloadUser'));
    // TODO
  }

  private openErrorSnackBar(message: string, durationInSeconds: number) {
    const duration = durationInSeconds * 1000;
    this.matSnackBar.openFromComponent(ErrorModalComponent, {
      data: { message, duration },
      duration,
    });
  }

}
