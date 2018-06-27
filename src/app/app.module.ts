import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './services/data/data.service';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule( {
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
