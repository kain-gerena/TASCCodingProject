import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { AllitemsComponent } from './allitems/allitems.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  declarations: [
    AppComponent,
    ItemFormComponent,
    AllitemsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
