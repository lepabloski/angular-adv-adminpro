import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
      { path: 'graphic', component: Graphics1Component, data: {titulo: 'Graphic'}},
      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de cuenta'}},
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'observables'}},
    ],
  },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
