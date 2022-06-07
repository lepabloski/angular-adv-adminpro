import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
})
export class IncrementComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  // @Input('valor') progress: number = 50 para re definir el valor del input
  @Input('valor') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';
  // la salida en es EventEmitter en cualva a emitir un evento de tipo numero,
  // lo signo valor para evitar el null o el undefined
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  changeProgress = (value: number) => {
    // range plus validation
    if (this.progress >= 100 && value >= 0) {
      this.valorSalida.emit(100);
      return (this.progress = 100);
    }
    // reange minus validation
    if (this.progress <= 0 && value < 0) {
      this.valorSalida.emit(0);
      return (this.progress = 0);
    }
    // change the value o progress depending on value

    this.valorSalida.emit(this.progress);
    return (this.progress = this.progress + value);
  };

  // funcion que regural maximos y minimos segun cambia el input
  onChange(valor: number) {
    // ciontrolamos que valor no sea mayor que 100 ni menor que 0
    if (valor >= 100) this.progress = 100
    else if (valor <= 0) this.progress = 0
    else this.progress = valor

    this.valorSalida.emit(this.progress)
  }
}
