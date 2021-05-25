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

    { text: 'ngrx basics', url: '/ngrx-basics' },
    { text: 'ngrx async flow', url: '/ngrx-async-flow' },
    { text: 'Adv. Todos', url: '/adv-todos' },
    { text: 'Single Room Detector', url: '/single-room-detector' },
    { text: 'Many Room Detectors', url: '/many-room-detectors' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) { }
}
