import { Component } from '@angular/core';
import { USER_DATA } from './data/user-data';
import {User} from './model/user';
import {DataService} from './services/dataservice';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: User[];

  childChanged(eventdata: any){
    this.title = eventdata;
  }
  constructor(public dataService: DataService){

  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAao3t6-Jctc6BJA8xnzJoMAB3ANtgY9XQ",
    authDomain: "vinod-be66a.firebaseapp.com"
    });
    this.dataService.getHttpData().subscribe(data=>{this.users=data;
      console.log('Printing user data');
      console.log(this.users);});
    
  }
}
