import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  token: any;
  register(username: string, password: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(username, password)
      .then(response => console.log(response)
      )
      .catch(err => console.log(err));
  }

  login(username: string, password: string) {
    // return 
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(response => {
        console.log(response)
        firebase.auth().currentUser.getIdToken()
          .then(token => {
          this.token = token;
            console.log(token);
            this.router.navigate(['/pipe'],{queryParams:{pageNumbre:503}});

          })
          .catch(err => console.log(err));
          
      }
      )
      .catch(err => console.log(err));
  }
  constructor(private router: Router) { }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(token => this.token)
      .catch(err => console.log(err));
    return this.token;
  }

  isAuthenticated(){
    return this.token!=null;
  }
}
