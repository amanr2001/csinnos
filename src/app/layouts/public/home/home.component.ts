import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({ transform: 'translateX(0)' })),
  //     transition('void => *', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate(200)
  //     ]),
  //     transition('* => void', [
  //       animate(200, style({ transform: 'translateX(100%)' }))
  //     ])
  //   ])
  // ]
})
export class HomeComponent implements OnInit {

  imagesUrl = [
    "./../../../../assets/images/slider-img-1.jpg",
    "./../../../../assets/images/slider-img-2.jpeg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
