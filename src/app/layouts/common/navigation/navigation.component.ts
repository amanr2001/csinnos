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
    let element = document.querySelector('.mobile-navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-theme-black');
    } else {
      element.classList.remove('bg-theme-black');
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
