import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Word } from './model/word.model';
import { Model } from './model/repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-web';

  mess: string;

  constructor(private http: HttpClient, private model: Model) {
/*
    this.http.get<string>('http://localhost:8080/', {responseType: 'text' as 'json'}).subscribe(result => {
      this.mess = result;
    });
*/
    this.mess = 'Привет Привет';
  }
  getWords(): Word[] {
    return this.model.getWords();
  }
}
