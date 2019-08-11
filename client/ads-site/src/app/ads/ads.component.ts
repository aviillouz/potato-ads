import { Component, OnInit } from '@angular/core';
import { Ad } from '../ad';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads: Ad[] = [
    { id: 1, role: "a", description: "b", createdAt: new Date(), updatedAt: new Date() },
    { id: 2, role: "c", description: "d", createdAt: new Date(), updatedAt: new Date() }
  ];

  constructor() { }

  ngOnInit() {
  }

}
