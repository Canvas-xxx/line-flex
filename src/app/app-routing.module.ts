import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  } from './feature/flex-message/flex-message.module'

const routes: Routes = [
  { path: 'flex', loadChildren: () => import('./feature/flex-message/flex-message.module').then(m => m.FlexMessageModule) },
  { path: '**', redirectTo: 'flex' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
