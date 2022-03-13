import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  fileNameShorter(assigtName: string, len: number) {
    if (assigtName.length <= len) {
      return assigtName;
    } else {
      assigtName = assigtName.substr(0, len) + (assigtName.length > len ? '...' : '');
      return assigtName;
    }
  }

  seperateThousandsWithComma(priceNumber: number) {
    return priceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
