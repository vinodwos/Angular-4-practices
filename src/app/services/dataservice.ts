import {Injectable} from '@angular/core';
import {USER_DATA} from '../data/user-data';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map';
import {User} from '../model/user';
import { AuthService } from './auth.service';
import {HttpClient } from '@angular/common/http';

@Injectable()

export class DataService{

    constructor(private http:Http, private authService: AuthService, private httpClient: HttpClient){
        // this.getAnotherHttpData();
    }
    getHttpData(){
       return this.http.get("assets/user-data.json").map(response=><User []>response.json().userdata);
                        // .subscribe((data)=>console.log(data));
    }
    getUserData(){
        return USER_DATA;
    }
    getAnotherHttpData(){ 
         this.http.get("https://vinod-be66a.firebaseio.com/userdata.json").map(response=>response.json())
         .subscribe(data=>{
            console.log(data);
         });

        //  this.http.get("https://vinod-be66a.firebaseio.com/userdata.json").map(response=>response.json())
        //  .subscribe(data=>{
        //     console.log(data);
        //  });
        
    }

    getHttpClientData(){
        return this.httpClient.get <User []>("https://vinod-be66a.firebaseio.com/userdata.json");
        // .subscribe(data=>{
        //    console.log(data);
        // });
    }
}