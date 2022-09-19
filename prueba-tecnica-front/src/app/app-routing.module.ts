import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MoreSComponent } from './more-s/more-s.component';
import { MoviesComponent } from './movies/movies.component';
import { SeeMoreComponent } from './see-more/see-more.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"

  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent

  },
  {
    path: "movies",
    component: MoviesComponent

  },
  {
    path: "series",
    component: SeriesComponent

  },
  {
    path: "more/:id",
    component: SeeMoreComponent

  },
  {
    path: "moreS/:id",
    component: MoreSComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
