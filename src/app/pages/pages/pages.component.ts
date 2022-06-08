import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

declare function initFuntion():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  linkTheme = document.querySelector('#theme')
  constructor( private settings: SettingsService) { }

  ngOnInit() {
    initFuntion()
    const defaultThemeUrl = `./assets/css/colors/default.css`;
    const selectedTheme = localStorage.getItem('theme') || defaultThemeUrl
    
    this.linkTheme?.setAttribute('href', selectedTheme)
  }

}
