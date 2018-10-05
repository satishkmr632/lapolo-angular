import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API_URL  =  'http://127.0.0.1:8000/api/';

  constructor(private  httpClient:  HttpClient) { }

  getPosts(){
    return  this.httpClient.get('https://desolate-scrubland-99387.herokuapp.com/post/');
}
}
