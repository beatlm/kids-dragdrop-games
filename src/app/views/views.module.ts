import { LibraryModule } from './../common/library.module';
import { MathsComponent } from './maths/maths.component';
import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  MatIconModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatChipsModule,
} from "@angular/material";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuComponent } from './menu/menu.component';
import { EnglishComponent } from './english/english.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    DragDropModule,
    LibraryModule

  ],
  declarations: [
    MathsComponent,
    MenuComponent,
    EnglishComponent
    
  ],
  exports: [
    MathsComponent,
    MatCardModule,
    MenuComponent
  ],
  providers: [],
})
export class ViewsModule {}
