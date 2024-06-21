import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.css'
})
export class RxjsLearningComponent implements OnInit {

  agents ?: Observable<string>;
  agentName ?: string;

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer){
        try{
          observer.next("Riya");

          setInterval(() => {
            observer.next("Rohan");
          }, 3000);

          setInterval(() => {
            observer.next("Diya");
          }, 6000);
          
        }
        catch(e){
          observer.error(e);
        }
      }
    );

    this.agents.subscribe(data => {
      this.agentName = data;
    })
  }

}
