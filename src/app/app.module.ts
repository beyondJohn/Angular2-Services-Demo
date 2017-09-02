import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTPTestComponent } from './http-test.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,HTTPTestComponent
  ],
  imports: [
    BrowserModule, HttpModule			
  ],
  providers: [],
  bootstrap: [AppComponent,HTTPTestComponent]
})
export class AppModule { }
