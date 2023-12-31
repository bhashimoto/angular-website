import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BigCardComponent } from './shared/big-card/big-card.component';
import { PokedexMainComponent } from './pages/pokedex/pokedex-main/pokedex-main.component';
import { CardComponent } from './pages/pokedex/components/card/card.component';
import { PokedexDetailComponent } from './pages/pokedex/pokedex-detail/pokedex-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    BigCardComponent,
    PokedexMainComponent,
    CardComponent,
    PokedexDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
