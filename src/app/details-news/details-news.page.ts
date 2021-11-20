import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.page.html',
  styleUrls: ['./details-news.page.scss'],
})
export class DetailsNewsPage implements OnInit {

  detailsNews: any;
  constructor(public actRoute: ActivatedRoute) {
    this.actRoute.queryParams.subscribe((res) => {
      console.log("dffdff ", res.data)
      this.detailsNews = res.data;
    })
   }

  ngOnInit() {
  }

}
