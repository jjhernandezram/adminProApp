import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progressBarA: number = 15;
  progressBarB: number = 40;

  get getProgressA() {
    return `${this.progressBarA}%`;
  }

  get getProgressB() {
    return `${this.progressBarB}%`;
  }

  valorRecibido(valor: number) {
    console.log(valor);
  }
}
