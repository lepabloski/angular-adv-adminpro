import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  // progress: number = 50;
  // // we create a getter to access the progress
  // get getProgress() {
  //   return `${this.progress}%`;
  // }

  // changeProgress = (value: number) => {
  //   console.log(this.progress);
  //   // range plus validation
  //   if (this.progress >= 100 && value >= 0) {
  //     return (this.progress = 100);
  //   }
  //   // reange minus validation
  //   if (this.progress <= 0 && value < 0) {
  //     return (this.progress = 0);
  //   }
  //   // change the value o progress depending on value

  //   return (this.progress = this.progress + value);
  // };
}
