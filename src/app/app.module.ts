import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// custom modules
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages/pages.module';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
