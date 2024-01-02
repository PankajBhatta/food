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
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm) this.SearchTerm =params.searchTerm;
    });
  }
  ngOnInit(): void {
  }
  Search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search'+ term);
  }
}
