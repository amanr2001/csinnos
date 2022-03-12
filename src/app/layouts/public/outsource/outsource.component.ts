import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outsource',
  templateUrl: './outsource.component.html',
  styleUrls: ['./outsource.component.css']
})
export class OutsourceComponent implements OnInit {

  packages: any = [
    { title: 'hire a team', description: 'A monthly subscription package which allows us to act as a remote team to oversee all your projects. Enjoy all the benefits of hiring a crew for a reasonable monthly fee.'},
    { title: 'your project', description: 'Assign your project to us and our experienced team will develop and deliver your completed tasks, adhering to all your time and budget constraints.'},
    { title: 'engineering assistant', description: 'Let us act as your support team working in tandem with your engineers, handling all the minor yet critical aspects of your design framework.'},
    { title: 'send your lead', description: 'Working with your lead engineer, we will coordinate to ensure the best utilization of available resources to complete your project.'},
    { title: 'collaboration', description: 'This is a total infusion of talent & skills whereby both your team and ours work together to see the project to completion. We will utilize combined resources from both ends to find the best solutions.'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
