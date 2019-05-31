import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  } from './feature/flex-message/flex-message.module'

const routes: Routes = [
  { path: 'flex', loadChildren: './feature/flex-message/flex-message.module#FlexMessageModule' },
  { path: '**', redirectTo: 'flex' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
