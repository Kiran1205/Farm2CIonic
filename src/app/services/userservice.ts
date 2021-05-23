import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../BaseHttpService';


@Injectable()
export class UserService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='user'
    }
    checkuserexist(phonenumber:any):Observable<any>    {
        return this.get('checkuserexist\?phonenumber='+phonenumber,this.COMMON_JSON_HEADER_REQUEST);
    }
    getuserInfo(data:any):Observable<any>  {
        return this.post('getuserInfo',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    registeruserInfo(data:any):Observable<any>  {
        return this.post('registeruserInfo',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    
}  