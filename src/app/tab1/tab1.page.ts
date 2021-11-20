import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  sendMessageInWP() {
    window.open('whatsapp://send?abid=8530244224&text=Hello%2C%20World!')
  }

  openFbPage() {
    window.open('https://www.facebook.com/vishal.vanani.31')
  }

  openInstaPage() {
    window.open('https://www.instagram.com/vanani_vishal/');
  }

  openLinkedinPage() {
    window.open('www.linkedin.com/in/vishal-vanani-86085211b');
  }


}
