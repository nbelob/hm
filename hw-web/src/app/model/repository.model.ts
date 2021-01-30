import { Injectable } from '@angular/core';
import { Word } from './word.model';
// import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class Model {
  private words: Word[];

  constructor(private dataSource: RestDataSource) {
    this.words = new Array<Word>();
    this.dataSource.getData()
      .subscribe(data => {
          console.log('data: ' + JSON.stringify(data));

          this.words = data;
        }
      );
  }

  getWords(): Word[] {
    return this.words;
  }
}
