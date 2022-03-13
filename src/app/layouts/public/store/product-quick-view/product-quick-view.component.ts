import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-product-quick-view',
  templateUrl: './product-quick-view.component.html',
  styleUrls: ['./product-quick-view.component.css']
})
export class ProductQuickViewComponent implements OnInit {

  totalPrice: number | undefined;
  quantity: number = 1;

  constructor(
    public dialogRef: MatDialogRef<ProductQuickViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: number,
      name: string,
      category: string,
      price: number,
      image: string
    },
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.totalPrice = this.data.price * this.quantity;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  calculateTotal(count: any) {
    this.totalPrice = this.data.price * count;
  }

  shorterFileName(assigtName: string, len: number) {
    return this.commonService.fileNameShorter(assigtName, len);
  }

  thousandSeperator(priceNumber: any) {
    return this.commonService.seperateThousandsWithComma(parseInt(priceNumber));
  }

}
