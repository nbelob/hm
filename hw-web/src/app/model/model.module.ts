import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Model } from './repository.model';
@NgModule({
  providers: [Model, RestDataSource]
})
export class ModelModule { }
