import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'hackernews',
    loadChildren: () => import('./hackernews/hackernews.module').then(module => module.HackernewsModule)
  },
  {
    path: 'countdown-timer',
    loadChildren: () => import('./countdown-timer/countdown-timer.module').then(module => module.CountdownTimerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
