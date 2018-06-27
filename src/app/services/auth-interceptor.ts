import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent,HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log('Intercept ', req);
        const cloneReq = req.clone({
            params: new HttpParams().set("auth",this.authService.getToken())
        })
        return next.handle(cloneReq);
    }
}