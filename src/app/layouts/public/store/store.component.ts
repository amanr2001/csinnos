import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/shared/services/common.service';
import { ProductQuickViewComponent } from './product-quick-view/product-quick-view.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  categories: any[] = [
    { id: 'Safety', name: 'Safety' },
    { id: 'Hinges & Litches', name: 'Hinges & Litches' },
    { id: 'Machinery', name: 'Machinery' },
  ];

  productsList: any[] = [
    { id: 1, category: 'Machinery', name: 'Coffee capsule filling and sealing machine', price: 14000.00, productImg: './../../../../assets/images/store/product-1.webp' },
    { id: 2, category: 'Hinges & Litches', name: 'HINGE SIDE MOUNT (M)--AS013-000-000M', price: 48.00, productImg: './../../../../assets/images/store/product-2.webp' },
    { id: 3, category: 'Hinges & Litches', name: 'HINGE SIDE MOUNT (A)--AS013-000-000A', price: 48.00, productImg: './../../../../assets/images/store/product-3.webp' },
    { id: 4, category: 'Safety', name: 'Fire Exit Board', price: 45.00, productImg: './../../../../assets/images/store/product-4.webp' },
    { id: 5, category: 'Safety', name: 'Gas Discharged LED Warning Light Board', price: 45.00, productImg: './../../../../assets/images/store/product-5.webp' },
    { id: 6, category: 'Safety', name: 'LED Warning Lamp', price: 100.00, productImg: './../../../../assets/images/store/product-6.webp' },
  ]

  constructor(public dialog: MatDialog, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  openQuickView(prodId: number): void {
    const dialogRef = this.dialog.open(ProductQuickViewComponent, {
      width: '50%',
      data: {
        id: this.productsList[prodId].id,
        category: this.productsList[prodId].category,
        name: this.productsList[prodId].name,
        price: this.productsList[prodId].price,
        image: this.productsList[prodId].productImg
      },
    });
  }

  shorterFileName(assigtName: string, len: number) {
    return this.commonService.fileNameShorter(assigtName, len);
  }

  thousandSeperator(priceNumber: number) {
    return this.commonService.seperateThousandsWithComma(priceNumber);
  }

}
