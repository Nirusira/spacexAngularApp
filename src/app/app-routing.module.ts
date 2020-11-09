import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ProgramsListComponent }
];

@NgModule({
  declarations: [ 
    ProgramsListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
