import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  i: number = 0;

  constructor() {}

  ngOnInit(): void {
    // this.returnObservable()
    //   .pipe(retry(1))
    //   .subscribe(
    //     (value) => console.log('valor', value),
    //     (err) => console.warn('error', err),
    //     () => console.info('Obs completado')
    //   );

    this.subscription = this.intervarObserver().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Unsubscribed');
  }

  intervarObserver(): Observable<number> {
    // map(); transforma el valor del observable
    // filter(); evalua que el valor observado cumpla con el criterio establecido para ser emitido
    // take(); numero de emiciones que tendra el observable para despues completarse.
    return interval(500).pipe(
      map((value) => value + 1),
      filter((value) => (value % 2 !== 0 ? true : false)),
      take(100)
    );
  }

  returnObservable() {
    return new Observable<number>((obvserver) => {
      const interval = setInterval(() => {
        this.i++;
        obvserver.next(this.i);
        // Emite el valor que sera escuchado por el subscriber.

        if (this.i === 4) {
          console.log('error 1');
          obvserver.error('El valor llego a 4');
          // error(); se maneja el error (con el retry(x), no se manda el error, , se re-ejecuta
          // el codigo x veces segun el retry, si no se resuelve, manda el error)
        }

        if (this.i === 6) {
          console.log('error 2');
          obvserver.error('El valor llego a 6');
        }

        if (this.i === 10) {
          clearInterval(interval);
          obvserver.complete();
          // complete(); Notifica al observer que el Observable a terminado.
        }
      }, 1000);
    });
  }
}
