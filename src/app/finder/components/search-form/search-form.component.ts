import {Component, Output , EventEmitter, OnInit} from '@angular/core';
import {SearchService} from "../../services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit  {
  @Output() searchResultList = new EventEmitter<any[]>()
  searchForm: FormGroup;
  constructor(private searchService: SearchService,
              private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.createSearchForm()
  }

  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      search : ['', Validators.required]
    })
  }
  onSearchClick() {
    const searchItem = this.searchForm.value
    this.searchService.onSearch(searchItem.search).subscribe(value => {
      this.searchResultList.emit(value.items)
    })
  }
}
