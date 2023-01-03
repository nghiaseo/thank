import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { McPostsComponent } from './mc-posts/mc-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    McPostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
