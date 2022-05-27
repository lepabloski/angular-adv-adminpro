import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'graphic', component: Graphics1Component },
  { path: '', redirectTo: 'dashboard' , pathMatch: 'full'},
  { path: '**', component: NotFoundPageComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
