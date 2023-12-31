// import { TestBed } from '@angular/core/testing';

// import { FoodService } from './food.service';

// describe('FoodService', () => {
//   let service: FoodService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(FoodService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { Injectable } from "@angular/core";
import { sample_foods } from "src/data";
import { Food } from "../shared/models/food";

@Injectable({
  providedIn:'root'
})

export class FoodService{
  constructor(){}
    getAll():Food[]{
      return sample_foods;
    }
  }
