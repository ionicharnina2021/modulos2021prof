import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DosComponent } from './dos/dos.component';
import { PrimeraModule } from './funcionalidadUno/primera.module';

@NgModule({
  declarations: [
    AppComponent,
    DosComponent,      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    PrimeraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
