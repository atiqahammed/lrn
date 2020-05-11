import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Beef', 200),
    new Ingredient('Onion', 50)
  ];

  constructor() { }

  ngOnInit() {
  }

}
