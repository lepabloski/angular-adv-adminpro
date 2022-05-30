import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  exports: [
    BreadcrumbComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
