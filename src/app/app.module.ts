import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/common/navigation/navigation.component';
import { FooterComponent } from './layouts/common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PublicComponent } from './layouts/public/public.component';
import { PublicRoutingModule } from './layouts/public/public-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PublicRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
