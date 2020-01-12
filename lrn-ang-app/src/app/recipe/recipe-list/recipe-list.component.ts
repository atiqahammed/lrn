import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Chaomin', 'Chow mein are Chinese noodles with vegetables and sometimes meat the name is a romanization of the Taishanese chāu-mèing. The dish is popular throughout the Chinese diaspora and appears on the menus of most Chinese restaurants abroad.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chow_mein_1_by_yuen.jpg/220px-Chow_mein_1_by_yuen.jpg'),
    new Recipe('Samucha', 'A Samucha is a fried or baked pastry with a savory filling such as spiced potatoes, onions, peas, lentils, ground lamb, beef or chicken. The size, shape and consistency may vary, but many versions are triangular. Samuchas are often accompanied by chutney.', 'http://banglafreetips.com/wp-content/uploads/2018/04/testy-somocha.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
