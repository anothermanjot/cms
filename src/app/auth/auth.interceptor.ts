import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
              'X-ADMIN-KEY': 'cda48e6c39154c41a66e59584fe58f6a',
              'X-AUTH-TOKEN': sessionStorage.getItem('token') || ''
            }
          });
        return next.handle(req);
    }

}
