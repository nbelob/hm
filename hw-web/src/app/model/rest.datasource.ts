import { Injectable } from '@angular/core';
import { Word } from './word.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestDataSource {
  private data: Word[];

  constructor(private http: HttpClient) {
  }

  getData(): Word[] {
    this.http.get<Word[]>('http://localhost:8080/').subscribe(result => {
      this.data = result;
    });
    console.log(this.data);
    return this.data;
  }
}
