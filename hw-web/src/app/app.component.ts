import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-web';

  mess: string;

  constructor(private http: HttpClient) {

    this.http.get<string>('http://localhost:8080/').subscribe(result => {
      this.mess = result;
    });

  }

}
