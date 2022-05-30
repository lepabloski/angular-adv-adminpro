import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Custom modules
import { PagesRoutingModule } from './pages/pages.router';
import { AuthRoutingModule } from './auth/auth.router';
// modulo independiente
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [{ path: '**', component: NotFoundPageComponent }];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
