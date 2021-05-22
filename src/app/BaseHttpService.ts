import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseHttpService {
 baseRoute : string;

 private CONTENT_JSON_HEADERS : HttpHeaders = new  HttpHeaders().set('Content-Type','application/json')
 COMMON_JSON_HEADER_REQUEST : any = {Headers : this.CONTENT_JSON_HEADERS};

 constructor(private http : HttpClient) {

 }

 protected get(path : string, options : any) {
    let url = this.getEndPoint(path);    
    return this.http.get(url,options);
 }

 protected post(path : string,data: any, options : any) {
    let url = this.getEndPoint(path);
    return this.http.post(url, data, options);
 }

 protected put(path : string, data: any, options : any) {
    let url = this.getEndPoint(path);
    return this.http.put(url, data, options);
 }
 
 protected delete(path : string,  options : any) {
    let url = this.getEndPoint(path);
    return this.http.delete(url, options);
 }

 private getEndPoint(path : string) : string {
     let actualURl = `${environment.apiBase}/${this.baseRoute}`
     return `${actualURl}/${path}`;
 }
 
}