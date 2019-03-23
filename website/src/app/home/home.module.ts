import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: ContainerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContainerComponent]
})
export class HomeModule { }
