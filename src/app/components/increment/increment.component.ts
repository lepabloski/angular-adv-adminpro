import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent {
  // @Input('valor') progress: number = 50 para re definir el valor del input
  @Input('valor') progress: number = 50;
// la salida en es EventEmitter en cualva a emitir un evento de tipo numero, 
// lo signo valor para evitar el null o el undefined
  @Output() valorSalida: EventEmitter<number> = new EventEmitter

  changeProgress = (value: number) => {
    console.log(this.progress);
    // range plus validation
    if (this.progress >= 100 && value >= 0) {
      this.valorSalida.emit(100)
      return (this.progress = 100)
    }
    // reange minus validation
    if (this.progress <= 0 && value < 0) {
      this.valorSalida.emit(0)
      return (this.progress = 0)
    }
    // change the value o progress depending on value
    
    this.valorSalida.emit(this.progress)
   return this.progress = this.progress + value
  };

}
