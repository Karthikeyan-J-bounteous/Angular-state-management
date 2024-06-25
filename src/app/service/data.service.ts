import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, SchedulerLike, Subject, asyncScheduler, delay, from, observeOn, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new Subject<string>();

  private dataSubject1 = new BehaviorSubject<string>('Initial Value');
  
  data$ = this.dataSubject.asObservable();
  data1$ = this.dataSubject1.asObservable();

  sendData(data: string) {
    this.dataSubject.next(data);
  }

  sendData1(data: string) {
    this.dataSubject1.next(data);
  }

  getData(): Observable<number> {
    return from([1, 2, 3, 4, 5]).pipe(
      //double()
      // observeOn(asyncScheduler)
      doubleWithDelay(asyncScheduler)
    );
  }
  
}
export function double() {
  return function(source: Observable<number>): Observable<number> {
    return new Observable(observer => {
      return source.subscribe({
        next(value) {
          observer.next(value * 2);
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        }
      });
    });
  };
}

export function doubleWithDelay(scheduler: SchedulerLike) {
  return function(source: Observable<number>): Observable<number> {
    return new Observable(observer => {
      return source.pipe(
        observeOn(scheduler),
        delay(5000)
      ).subscribe({
        next(value) {
          observer.next(value * 2);
        },
        error(err) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        }
      });
    });
  };
}

