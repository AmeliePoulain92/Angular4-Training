import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JazzmenComponent } from './jazzmen/jazzmen.component';
import { JazzmenListComponent } from './jazzmen/jazzmen-list/jazzmen-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JazzmenComponent,
    JazzmenListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
