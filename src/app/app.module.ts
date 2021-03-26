import { Globals } from './shared/helpers/globals';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginanovatesteComponent } from './paginanovateste/paginanovateste.component';
import { TerceirapaginaComponent } from './terceirapagina/terceirapagina.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginanovatesteComponent,
    TerceirapaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
