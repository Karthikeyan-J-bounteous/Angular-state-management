import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent implements OnInit {
  data?: string;
  data2: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data1$.subscribe(data => {
      console.log("Subject")
      this.data = data;
      console.log(this.data)
    });

    this.dataService.getData().subscribe(
      data => this.data2.push(data)
    );
  }
}
