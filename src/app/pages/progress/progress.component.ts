import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progress_1: number = 50;
  // we create a getter to access the progress
  get getProgress1() {
    return `${this.progress_1}%`;
  }
  progress_2: number = 35;
  // we create a getter to access the progress
  get getProgress2() {
    return `${this.progress_2}%`;
  }

}
