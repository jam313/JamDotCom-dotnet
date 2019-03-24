import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jamDotCom';
  
  constructor(
    private router: Router
  ) {  }
}
