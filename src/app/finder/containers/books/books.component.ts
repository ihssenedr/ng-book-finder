import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  items: any [] = []
  constructor() { }

  ngOnInit(): void {
  }

  handleSearchData(data : any[]) {
   this.items = data
  }
}
