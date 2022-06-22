import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnDestroy{
  public title: any = '';

  public titulosubs$!: Subscription;
  constructor(private router: Router) {
    this.titulosubs$ = this.getDataRoutes().subscribe(({ titulo }) => {
      // destructuring de titulo en el objeto data
      this.title = titulo;
      document.title = `AdminPro - ${titulo} `;
    });
  }
  ngOnDestroy(): void {
    this.titulosubs$.unsubscribe();
  }

  getDataRoutes() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((evento) => evento.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
