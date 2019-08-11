import { Component, OnInit } from '@angular/core';
import { Ad } from '../ad';
import { AdsService } from '../ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads: Ad[];

  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.adsService.getAds().subscribe(ads => this.ads = ads);
  }

}
