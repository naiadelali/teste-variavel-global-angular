import { TerceirapaginaComponent } from './terceirapagina/terceirapagina.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginanovatesteComponent } from './paginanovateste/paginanovateste.component';

const routes: Routes = [
  {path: '', component: PaginanovatesteComponent},
  {path: 'terceira', component: TerceirapaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
