import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  linkTheme = document.querySelector('#theme');
  constructor() {
    this.setTheme();
  }

  setTheme() {
    const defaultThemeUrl = `./assets/css/colors/default.css`;
    const selectedTheme = localStorage.getItem('theme') || defaultThemeUrl;

    this.linkTheme?.setAttribute('href', selectedTheme);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme() 
  }

  checkCurrentTheme() {
    // (property) AccountSettingsComponent.links: NodeListOf<Element>
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach((elem) => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }
    });
  }
}
