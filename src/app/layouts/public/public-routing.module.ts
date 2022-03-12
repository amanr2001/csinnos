import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OutsourceComponent } from './outsource/outsource.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { StoreComponent } from './store/store.component';

const publicRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'outsource', component: OutsourceComponent },
  { path: 'outsource', component: OutsourceComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'testimonials', component: SocialMediaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
