import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isMobileMenuOpen: boolean = false;

  constructor(private router: Router) { }

  @HostListener('window:scroll') onWindowScroll(): void {
    let small = document.querySelector('.sm-navbar') as HTMLElement;
    let large = document.querySelector('.lg-navbar') as HTMLElement;
    let smMenuIcon = document.querySelector('#sm-menu-icon') as HTMLElement;
    if (window.pageYOffset > small.clientHeight || window.pageYOffset > large.clientHeight) {
      small.classList.add('bg-white', 'shadow-md');
      large.classList.add('shadow-md');
      smMenuIcon.classList.add('text-black');
      smMenuIcon.classList.remove('text-white');
    } else {
      small.classList.remove('bg-white', 'shadow-md');
      large.classList.remove('shadow-md');
      smMenuIcon.classList.remove('text-black');
      smMenuIcon.classList.add('text-white');
    }
  }

  ngOnInit(): void {
    this.isMobileMenuOpen = false;
  }

  openMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  navigationItemClick(location: string) {
    this.router.navigateByUrl(location).then(() => {
      window.location.reload();
    });
  }

}
