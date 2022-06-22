import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'main', url: '/' },
        { titulo: 'Progress', url: 'progress' },
        { titulo: 'Graphic', url: 'graphic' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ]
    },
  ];

  constructor() {}
}
