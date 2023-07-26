import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { watch } from './watch';
import { Employee } from './user';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class WatchService implements HttpInterceptor {


  constructor(private http: HttpClient) { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes("todos/1")) {
      return next.handle(req);
    }
    const httpsreq = req.clone({ url: req.url.replace("http://", "https://") });
    return next.handle(httpsreq)
  }



  private url = 'https://localhost:7011/'
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AuthService.GetData("token")}`
  })


  getdetails(): Observable<watch[]> {
    return this.http.get<watch[]>(`http://localhost:5000/watch`)
  }
  getdetailswithid(id: number): any {
    return this.http.get<any>(`http://localhost:5000/watch/${id}`);
  }
  getemployeeDetails(): Observable<any> {
    return this.http.get<any>('https://localhost:7011/Employee/GetEmployees', { headers: this.headers })
  }
  createEmployee(details: any): Observable<any> {
    console.log(details);
    return this.http.post<any>(this.url + 'Employee/CreateEmployee', details)
  }

  //User can login.
  Token(email: string, password: string) {
    const credentials = {
      email: email,
      password: password
    }
    

    return this.http.post<any>(this.url + 'Token/AuthToken', credentials, { headers: this.headers })
  }
}
