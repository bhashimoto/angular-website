import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PokedexMainComponent } from './pages/pokedex/pokedex-main/pokedex-main.component';
import { PokedexDetailComponent } from './pages/pokedex/pokedex-detail/pokedex-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "blog", component: BlogComponent},
  { path: "pokedex", component: PokedexMainComponent},
  { path: "pokedex/:id", component: PokedexDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
