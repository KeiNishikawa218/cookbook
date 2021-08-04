import { Component, OnInit } from '@angular/core';
import { RECIPEDATA } from '../recipe/recipedata';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipedata = RECIPEDATA;

  constructor() { }

  ngOnInit(): void {
  }

}
