import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {

  mediaList: any[]= [];
  constructor() { 
    this.mediaList = [
      {
        title: 'title 1',
        audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
      },
      {
        title: 'title 2',
        audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
      },
      {
        title: 'title 3',
        audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
      }
    ]
  }

  ngOnInit() {
  }

}
