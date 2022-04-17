import { FichaComponent } from './ficha/ficha.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    FichaComponent
  ],
  exports: [
   FichaComponent
  ],
  providers: [],
})
export class LibraryModule { 


}
