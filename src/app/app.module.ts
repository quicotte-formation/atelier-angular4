import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CombopaysComponent } from './combopays/combopays.component';
import { BoundinputComponent } from './boundinput/boundinput.component';
import { FilmformComponent } from './filmform/filmform.component';

@NgModule({
  declarations: [
    AppComponent,
    CombopaysComponent,
    BoundinputComponent,
    FilmformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
