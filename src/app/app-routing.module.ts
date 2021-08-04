import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDataComponent } from './recipe-data/recipe-data.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "", redirectTo: '/recipe-list', pathMatch: 'full' },
      { path: "recipe-list", component: RecipeListComponent },
      { path: "recipe-data/:id", component: RecipeDataComponent },
    ])
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
