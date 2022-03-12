import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll') onWindowScroll(): void {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('shadow-md');
    } else {
      element.classList.remove('shadow-md');
    }
  }

  ngOnInit(): void {
  }

}
