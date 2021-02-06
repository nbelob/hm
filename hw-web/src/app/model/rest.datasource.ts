import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Word } from './word.model';

@Injectable()
export class RestDataSource {
  private data: Word[];

  constructor(private http: HttpClient) {
  }

  getData(): Observable<Word[]> {
    return this.http.get<Word[]>('api/');
  }
}
