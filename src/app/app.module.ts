import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagListDirective } from './tag-list.directive';
import { TagListComponent } from './shared/tag-list/tag-list.component';
import { CommentsComponent } from './shared/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    TagListDirective,
    TagListComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
