import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {

  search:any;
  searchList:any =[];
  constructor() { }

  ngOnInit() {
  }
  enterSearch(){
   this.searchList.push({name:this.search});
   this.search = "";
  }
}
