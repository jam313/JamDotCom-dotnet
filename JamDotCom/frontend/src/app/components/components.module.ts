import { NgModule } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { SharedModule } from "../shared";
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    PeopleComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
