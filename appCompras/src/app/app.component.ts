import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCvNusHryD_mHq3PutCIw-taosZL1ouKaU',
      authDomain: 'comprasapp-d5cd2.firebaseapp.com'
    });
  }
}
