import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolePageComponent } from './components/console-page/console-page.component'

const routes: Routes = [
  { path: 'console-fx', component: ConsolePageComponent },
  { path: '**', redirectTo: 'console-fx' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexMessageRoutingModule { }
