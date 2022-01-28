import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TblAnnotation } from 'src/app/annotation.model'; 
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  addannotation(val:TblAnnotation){
    return this.http.post(this.APIUrl + '/annotation/', val)
  }
}
