import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagListComponent } from './shared/tag-list/tag-list.component';
import { textInputComponent } from './shared/text-input/textInput.component';

@NgModule({
  declarations: [
    AppComponent,
    TagListComponent,
    textInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
