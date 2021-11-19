import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/commons/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { IdaniaComponent } from './pages/idania/idania.component';
import { ContentComponent } from './pages/commons/content/content.component';
import { AniversariosComponent } from './pages/aniversarios/aniversarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    IdaniaComponent,
    ContentComponent,
    AniversariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
