import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import {RouterModule, Routes} from "@angular/router";
import { SearchFormComponent } from './components/search-form/search-form.component';
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  {path:'search' , component : fromContainers.BooksComponent}
]
@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components, SearchFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ]
})
export class FinderModule { }
