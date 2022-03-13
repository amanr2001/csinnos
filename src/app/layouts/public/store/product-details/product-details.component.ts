import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  totalPrice: number | undefined;
  quantity: number = 1;
 
  productsList: any[] = [
    { id: 1, category: 'Machinery', name: 'Coffee capsule filling and sealing machine', price: 14000.00, productImg: './../../../../../assets/images/store/product-1.webp' },
    { id: 2, category: 'Hinges & Litches', name: 'HINGE SIDE MOUNT (M)--AS013-000-000M', price: 48.00, productImg: './../../../../../assets/images/store/product-2.webp' },
    { id: 3, category: 'Hinges & Litches', name: 'HINGE SIDE MOUNT (A)--AS013-000-000A', price: 48.00, productImg: './../../../../../assets/images/store/product-3.webp' },
    { id: 4, category: 'Safety', name: 'Fire Exit Board', price: 45.00, productImg: './../../../../../assets/images/store/product-4.webp' },
    { id: 5, category: 'Safety', name: 'Gas Discharged LED Warning Light Board', price: 45.00, productImg: './../../../../../assets/images/store/product-5.webp' },
    { id: 6, category: 'Safety', name: 'LED Warning Lamp', price: 100.00, productImg: './../../../../../assets/images/store/product-6.webp' },
  ]

  productId = this.activateRoute.snapshot.params['id'];
  selectedProduct: any[] = [];

  constructor(private router: Router, private activateRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit(): void {
    this.selectedProduct = this.productsList.filter(item => item.id == this.productId);
    this.totalPrice = this.selectedProduct[0].price * this.quantity;
  }

  calculateTotal(count: any) {
    this.totalPrice = this.selectedProduct[0].price * count;
  }

  shorterFileName(assigtName: string, len: number) {
    return this.commonService.fileNameShorter(assigtName, len);
  }

  thousandSeperator(priceNumber: any) {
    return this.commonService.seperateThousandsWithComma(parseInt(priceNumber));
  }

}
