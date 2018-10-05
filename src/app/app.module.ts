import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderimageComponent } from './headerimage/headerimage.component';
import { BodyComponent } from './body/body.component';
import { BlogsComponent } from './body/blogs/blogs.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';

import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderimageComponent,
    BodyComponent,
    BlogsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
