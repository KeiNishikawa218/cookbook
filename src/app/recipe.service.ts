import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe';
import { RECIPEDATA } from './recipe/recipedata';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipedata: Recipe[] = RECIPEDATA;

  constructor() { }

  getRecipedata(): Recipe[] {
    return this.recipedata;
  }

  getRecipe(id:string): Recipe{
    return this.recipedata.find(recipe => recipe.id!.toString()==id) as Recipe;
  }
}
