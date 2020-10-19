import { CompoUnoComponent } from './compo-uno/compo-uno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoDosComponent } from './compo-dos/compo-dos.component';



@NgModule({
  declarations: [CompoUnoComponent, CompoDosComponent],
  imports: [
    CommonModule
  ],
  exports:[CompoUnoComponent]
})
export class PrimeraModule { }
