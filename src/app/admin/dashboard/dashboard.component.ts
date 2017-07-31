import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      const posts = response;
      console.log('posts', posts);
    });
  }

}
