import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


  recipes : Recipe[] = [
    new Recipe('A test Recipe','This is simply a test maybe','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new Recipe('A test Recipe','This is simply a test maybe','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new Recipe('A test Recipe','This is simply a test maybe','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
