import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { SearchFormComponent } from './components/search-form/search-form.component';
import {TranslateModule} from "@ngx-translate/core";


import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services'
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  {path:'search' , component : fromContainers.BooksComponent}
]
@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  providers : [...fromServices.services]
})
export class FinderModule { }
