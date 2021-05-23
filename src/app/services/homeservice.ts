import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../BaseHttpService';


@Injectable()
export class HomeService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='home'
    }
    getItems():Observable<any>    {
        return this.get('GetData',this.COMMON_JSON_HEADER_REQUEST);
    }
    getSelectedItems(selectedList:any):Observable<any>    {
        return this.post('GetSelectedItems',selectedList,this.COMMON_JSON_HEADER_REQUEST);
    }
}  