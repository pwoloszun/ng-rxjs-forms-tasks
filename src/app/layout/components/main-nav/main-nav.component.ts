import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nts-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  mainMenuLinks = [
    { text: 'Dashboard', url: '/' },

    { text: 'Forms tasks', url: '/forms-tasks' },

    { text: 'RxJS GUI tasks', url: '/rxjs-gui-tasks' },
    { text: 'RxJS GitHub repos', url: '/rxjs-github-repos' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) { }
}
