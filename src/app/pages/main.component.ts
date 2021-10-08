import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitScripts(): any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    customInitScripts();
  }
}
