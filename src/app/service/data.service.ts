import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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
}
