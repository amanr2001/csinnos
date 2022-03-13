import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { PublicModule } from '../layouts/public/public.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  imports: [
    CommonModule,
    PublicModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MdbCarouselModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    PdfViewerModule
  ],
  exports: [
    CommonModule,
    PublicModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MdbCarouselModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    PdfViewerModule
  ],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
