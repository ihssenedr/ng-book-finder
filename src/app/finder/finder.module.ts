import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainers from './containers';
import * as fromComponents from './components';


@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.componenets],
  imports: [
    CommonModule
  ]
})
export class FinderModule { }
