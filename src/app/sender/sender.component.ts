import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sender',
  template: `
    <button (click)="sendData()">Send Data</button>
  `
})
export class SenderComponent {
  constructor(private dataService: DataService) {}

  sendData() {
    this.dataService.sendData1('Hello from Sender Component');
  }
}