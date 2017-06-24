import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  hamburger: boolean = false;

  constructor(router:Router) {
  router.events.subscribe(event => {
    if(event instanceof NavigationStart) {
      this.hamburger = false;
    }
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  });
}

  ngOnInit() {
  }

}
