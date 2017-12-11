import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private httpClient: HttpClient) {}

  getData() {

    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        console.log(data);
      }
    );

  }

}
