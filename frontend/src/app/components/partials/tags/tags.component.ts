import { Tag } from 'src/app/shared/models/tags';
import { FoodService } from './../../../services/food.service.spec';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService:FoodService){
    this.tags = foodService.getAllTags();
  }

ngOnInit():void{

}
}
