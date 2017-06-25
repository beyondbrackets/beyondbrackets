import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {
  hamburger: boolean = false;
  @ViewChild("mySearchDiv") searchDiv: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.hamburger = false;
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  onFocus(): void {
    this.renderer.setStyle(this.searchDiv.nativeElement, 'width', '100vw');
    this.renderer.setStyle(this.searchDiv.nativeElement, 'right', '0');
  }

  onBlur(): void {
    this.renderer.setStyle(this.searchDiv.nativeElement, 'width', '5rem');
    this.renderer.setStyle(this.searchDiv.nativeElement, 'right', '5rem');  }
}
