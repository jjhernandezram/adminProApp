import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  theme = document.querySelector('#theme');
  constructor() {
    this.theme?.setAttribute(
      'href',
      localStorage.getItem('theme') || './assets/css/colors/default-dark.css'
    );
  }

  changeTheme(style: string) {
    const newTheme: string = `./assets/css/colors/${style}.css`;
    this.theme?.setAttribute('href', newTheme);
    localStorage.setItem('theme', newTheme);
    this.selectActualTheme();
  }

  selectActualTheme() {
    const themeElements = document.querySelectorAll('.selector');
    const actualTheme = localStorage.getItem('theme');

    themeElements.forEach((element) => {
      const newTheme = `./assets/css/colors/${element.getAttribute(
        'data-theme'
      )}.css`;
      element.classList.remove('working');
      if (newTheme === actualTheme) {
        element.classList.add('working');
      }
    });
  }
}
