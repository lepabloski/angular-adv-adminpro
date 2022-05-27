import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundPageComponent,
    DashboardComponent,
    BreadcrumbComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
