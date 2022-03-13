import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreComponent } from './store/store.component';
import { OutsourceComponent } from './outsource/outsource.component';
import { CareersComponent } from './careers/careers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MagazineComponent } from './magazine/magazine.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProductQuickViewComponent } from './store/product-quick-view/product-quick-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductDetailsComponent } from './store/product-details/product-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    SocialMediaComponent,
    ContactUsComponent,
    StoreComponent,
    OutsourceComponent,
    CareersComponent,
    AboutUsComponent,
    OurServicesComponent,
    ShoppingCartComponent,
    MagazineComponent,
    ProductQuickViewComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatIconModule,
    MatButtonModule,
    MdbCarouselModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    PdfViewerModule,
    MatDialogModule
  ]
})
export class PublicModule { }
