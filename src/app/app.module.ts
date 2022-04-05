import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MenuListComponent } from './menu-list/menu-list.component';
import { AddMenuComponent } from './MenuComponents/add-menu/add-menu.component';
import { UpdateMenuComponent } from './MenuComponents/update-menu/update-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    AddMenuComponent,
    UpdateMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
