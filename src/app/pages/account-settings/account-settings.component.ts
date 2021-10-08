import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
    `
      .selector {
        cursor: pointer;
      }
    `,
  ],
})
export class AccountSettingsComponent implements OnInit {
  theme = document.querySelector('#theme');
  themeElements!: NodeListOf<Element>;

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.selectActualTheme();
  }

  changeTheme(style: string) {
    this.settingsService.changeTheme(style);
  }
}
