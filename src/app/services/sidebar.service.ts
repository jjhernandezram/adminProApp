import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor() {}

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          route: '/dashboard',
        },
        {
          title: 'Progress bar',
          route: 'progress',
        },
        {
          title: 'Charts',
          route: 'charts',
        },
      ],
    },
  ];
}
