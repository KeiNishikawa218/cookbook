import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import { Recipe } from '../recipe/recipe';
import { RECIPEDATA } from '../recipe/recipedata';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.scss']
})
export class RecipeDataComponent implements OnInit {
  recipeid?: string;
  recipe?: Recipe;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.recipeid = this.route.snapshot.paramMap.get('id') || '1';
    this.recipe = RECIPEDATA.find(recipe => recipe.id?.toString() == this.recipeid);
  }

  backToList() {
    this.location.back();
  }

}
