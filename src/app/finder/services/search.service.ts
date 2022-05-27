import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService : ApiService) { }

  onSearch(q : string) {
    const path = `volumes?q=${q}`
    return this.apiService.get(path)
  }
}
