import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test description for test recipe', 'https://www.foodnetwork.com/recipes/food-network-kitchen/tuscan-chicken-skillet-5421728')
  ];

  constructor() { }

  ngOnInit() {
  }

}
