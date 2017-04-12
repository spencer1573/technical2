import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormReactComponent } from './form-react/form-react.component';
import { HeaderSectionComponent } from './header-section/header-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FormReactComponent,
    HeaderSectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
