import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {Routes} from '@angular/router';
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
