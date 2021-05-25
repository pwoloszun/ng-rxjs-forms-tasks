import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // { path: '', pathMatch: 'full', redirectTo: '/forms-tasks' },

  {
    path: 'forms-tasks',
    loadChildren: () => import('./features/11-forms-tasks/forms-tasks.module').then((m) => m.FormsTasksModule),
  },

  // TODO
  {
    path: 'rxjs-gui-tasks',
    loadChildren: () => import('./features/39-rxjs-gui-tasks/rxjs-gui-tasks.module').then((m) => m.RxjsGuiTasksModule),
  },
  {
    path: 'rxjs-github-repos',
    loadChildren: () =>
      import('./features/51-rxjs-github-repos/rxjs-github-repos.module').then((m) => m.RxjsGithubReposModule),
  },

  {
    path: 'ngrx-basics',
    loadChildren: () => import('./features/41-ngrx-basics/ngrx-basics.module').then(m => m.NgrxBasicsModule),
  },
  {
    path: 'ngrx-async-flow',
    loadChildren: () => import('./features/42-ngrx-async-flow/ngrx-async-flow.module').then(m => m.NgrxAsyncFlowModule),
  },
  {
    path: 'adv-todos',
    loadChildren: () => import('./features/44-adv-todos/adv-todos.module').then(m => m.AdvTodosModule),
  },
  {
    path: 'single-room-detector',
    loadChildren: () => import('./features/45-single-room-detector/single-room-detector.module').then(m => m.SingleRoomDetectorModule),
  },
  {
    path: 'many-room-detectors',
    loadChildren: () => import('./features/46-many-room-detectors/many-room-detectors.module').then(m => m.ManyRoomDetectorsModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
