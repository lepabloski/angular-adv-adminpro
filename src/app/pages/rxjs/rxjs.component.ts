import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit, OnDestroy {
  public intervalSuscription!: Subscription;
  constructor() {

  //   this.retornaObservable().subscribe({
  //     next: (v) => console.log(v),
  //     error: (e) => console.error(e),
  //     complete: () => console.info('complete') 
  // })
    this.intervalSuscription = this.retornaIntervalo().subscribe()

  }
  ngOnDestroy(): void {
    this.intervalSuscription.unsubscribe()
  }

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      map(v => v + 1),
      filter(v => v % 2 === 0 ? true : false),
    )

  }

  retornaObservable(): Observable<number> {
    let i = 0;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        // voy a emitir i cada un segundo y entonces voy a ser capaz de capturar el valor en la suscripcion
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if( i === 2) {
          observer.error(' i llego a 2')
        }
      }, 1000);
    });
  }

  ngOnInit(): void {}
}
