import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe';
import { RECIPEDATA } from './recipe/recipedata';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipedata: Recipe[] = RECIPEDATA;
  currentValue: string = '';

  constructor() { }

  getRecipedata(): Recipe[] {
    return this.recipedata;
  }

  getRecipe(id:string): Recipe{
    return this.recipedata.find(recipe => recipe.id!.toString()==id) as Recipe;
  }

  searchRecipe(keyword: string): Recipe[] {
    let resultArr: Recipe[] = [];

    for (let recipe of this.recipedata) {
      let dataStr = JSON.stringify(recipe);
      if (dataStr.search(keyword) >= 0) {
        resultArr.push(recipe);
      }
    }
    return resultArr;
  }
}
