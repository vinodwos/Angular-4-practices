import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent,HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()

export class LoggerInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('Intercept ', req);
        return next.handle(req).do(response =>{
            console.log('Logger...');
            console.log(response);
            return response;
        });
    }
}