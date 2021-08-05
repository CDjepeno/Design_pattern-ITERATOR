import { Meal } from './Meal';
import { IIterator } from '../interfaces/IIterator';
import { IteratorMealCreperie } from '../iterators/IteratorMealCreperie';
export class MealCreperie {
  meals: Meal[]

  constructor() {
    this.meals = new Array()
  }


  addMeal(name: string, description: string, vegetarian: boolean, price: number) {
    let meal: Meal = new Meal(name, description, vegetarian, price)
    this.meals.push(meal)
  }

  createIterator(): IIterator {
    return new IteratorMealCreperie(this.meals)
  }

}