import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';

const routes: Routes = [ //default route
  { path: 'learn', component: RxjsLearningComponent },
{ path: 'receive', component: ReceiverComponent },
{ path: 'send', component: SenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
