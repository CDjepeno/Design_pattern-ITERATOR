import { Meal } from './Meal';
import { IIterator } from '../interfaces/IIterator';
import { IteratorMealCafeteria } from '../iterators/IteratorMealCafeteria';
export class MealCafeteria {
  MAX_MEALS: number = 6
  mealCount: number = 0
  meals: Meal[]

  constructor() {
    this.meals = new Array(this.MAX_MEALS)
  }


  addMeal(name: string, description: string, vegetarian: boolean, price: number) {
    let meal: Meal = new Meal(name, description, vegetarian, price)
    if(this.mealCount >= this.MAX_MEALS) {
      return new Error("Désolé, le menu est plein: Impossible d'ajouter un plat.")
    } else {
      this.meals[this.mealCount] = meal 
      this.mealCount = this.mealCount + 1
    }
    this.meals.push(meal)
  }

  createIterator(): IIterator {
    return new IteratorMealCafeteria(this.meals)
  }


}