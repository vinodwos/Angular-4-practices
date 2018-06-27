import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/dataservice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private ds: DataService, private route: Router) { }

  ngOnInit() {
  }

  goto() {
    this.route.navigate(['pipe']);
  }
  login(loginForm: NgForm) {
    // console.log("***Username:" + loginForm.value.username);
    // console.log("***Password:" + loginForm.value.password);
    // loginForm.value.username="test";
    this.authService.login(loginForm.value.username, loginForm.value.password);
  }

  getApiData() {
    // this.ds.getAnotherHttpData();
    this.ds.getHttpClientData();
  }
}
