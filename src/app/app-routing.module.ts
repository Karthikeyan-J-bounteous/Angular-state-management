import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

const routes: Routes = [{ path: '', redirectTo: 'learn', pathMatch: 'full' }, //default route
  { path: 'learn', component: RxjsLearningComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
