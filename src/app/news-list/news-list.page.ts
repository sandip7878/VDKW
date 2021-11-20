import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {

  newsList: any[] = [];
  detailsNews: any;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.newsList = [
      {
        img: '../../assets/image/li-1.png',
        title: 'Title 1',
        desc: "item 1 description"
      },
      {
        img: '../../assets/image/li-2.png',
        title: 'Title 2',
        desc: "item 2 description"
      },
      {
        img: '../../assets/image/li-3.png',
        title: 'Title 3',
        desc: "item 3 description"
      },
      {
        img: '../../assets/image/li-4.png',
        title: 'Title 4',
        desc: "item 4 description"
      },
      {
        img: '../../assets/image/li-1.png',
        title: 'Title 1',
        desc: "item 1 description"
      },
      {
        img: '../../assets/image/li-2.png',
        title: 'Title 2',
        desc: "item 2 description"
      }
    ]
  }

  openDetailsNews(news) {
    console.log("news", news);
    this.detailsNews = news;
  }

  goBack() {
    this.detailsNews = '';
  }

}
