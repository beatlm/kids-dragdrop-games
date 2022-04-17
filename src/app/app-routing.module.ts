import { EnglishComponent } from './views/english/english.component';
import { MenuComponent } from './views/menu/menu.component';
import { AppComponent } from './app.component';
import { MathsComponent } from './views/maths/maths.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: "", component: MenuComponent },
  { path: "maths", component: MathsComponent },
  { path: "english", component: EnglishComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}