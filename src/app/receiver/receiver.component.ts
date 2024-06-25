import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-receiver',
  template: `
    <div>Data: {{ data }}</div>
  `
})
export class ReceiverComponent implements OnInit {
  data?: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data$.subscribe(data => {
      console.log("Subject")
      this.data = data;
      console.log(this.data)
    });
  }
}
