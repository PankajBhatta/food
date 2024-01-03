

import { Injectable } from "@angular/core";
import { sample_foods } from "src/data";
import { Food } from "../shared/models/food";

@Injectable({
  providedIn:'root'
})

export class FoodService{
  getAllTags(): import("src/app/shared/models/tags").Tag[] {
    throw new Error('Method not implemented.');
  }
  constructor(){}
    getAll():Food[]{
      return sample_foods;
    }
  }
