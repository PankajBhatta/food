import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { Router } from 'express';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit{
  SearchTerm='';
  router: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const query = params['query'];
});
  }
  ngOnInit(): void {
  }
  Search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search'+ term);
  }
}
