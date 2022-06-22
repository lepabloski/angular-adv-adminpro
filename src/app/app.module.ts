import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// custom modules
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages/pages.module';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthModule } from './auth/auth.module';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { PromesasComponent } from './pages/promesas/promesas.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
