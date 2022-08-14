import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  isHaifi: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  swapProduct(mizu: boolean): void {
    if (mizu) {
      this.isHaifi = false;
      return;
    }
    this.isHaifi = true;
  }

}
