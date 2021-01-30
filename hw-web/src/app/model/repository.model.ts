import { Injectable } from '@angular/core';
import { Word } from './word.model';
// import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class Model {
  private words: Word[];

  constructor(private dataSource: RestDataSource) {
    this.words = new Array<Word>();
    this.dataSource.getData().forEach(p => this.words.push(p));
  }
  getWords(): Word[] {
    return this.words;
  }
}
