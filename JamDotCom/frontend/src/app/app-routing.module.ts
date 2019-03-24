import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, PeopleComponent } from "./components";

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'blog',
  //   component: BlogComponent
  // },
  // {
  //   path: 'change-log',
  //   component: ChangeLogComponent
  // },
  {
    path: 'people',
    component: PeopleComponent
  },
  // {
  //   path: 'recommendations',
  //   component: RecommendationsComponent
  // }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
