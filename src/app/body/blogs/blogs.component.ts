import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
ApiService

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  private  posts:  Array<object> = [];

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.getPosts();
  }

  public  getPosts(){
    this.apiService.getPosts().subscribe((data:  Array<object>) => {
        this.posts  =  data;
        console.log(data);
    });
}
}


