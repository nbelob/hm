import { Injectable } from '@angular/core';
import { Word } from './word.model';

@Injectable()
export class StaticDataSource {
  private data: Word[];
  constructor() {
    this.data = new Array<Word>(
      new Word (1, 1, 'word', 'слово'),
      new Word (2, 1, 'connection', 'соединение'),
      new Word (3, 1, 'device', 'устройство'),
      new Word (4, 2, 'create', 'создавать'),
      new Word (5, 2, 'ensure', 'обеспечивать'),
      new Word (6, 2, 'embed', 'встраивать'),
      new Word (7, 3, 'compatible', 'совместимый'),
      new Word(8, 3, 'binary', 'двоичный'));
  }
  getData(): Word[] {
    return this.data;
  }
}
