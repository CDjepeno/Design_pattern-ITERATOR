import { MealCafeteria } from './MealCafeteria';
import { MealCreperie } from './MealCreperie';
import { IIterator } from '../interfaces/IIterator';
import { Meal } from './Meal';
export class Server {
  mealCafeteria: MealCafeteria
  mealCreperie: MealCreperie

  constructor(mcrep: MealCreperie, mcafet: MealCafeteria) {
    this.mealCafeteria = mcafet
    this.mealCreperie = mcrep
  }

  showMeal() {
    let iteratorMealCreperie: IIterator = this.mealCreperie.createIterator() 
    let iteratorMealCafeteria: IIterator = this.mealCafeteria.createIterator() 
    return`
      Menu BRUNCH
      ${this.showMealCheck(iteratorMealCreperie)}
      DEJEUNER
      ${this.showMealCheck(iteratorMealCafeteria)}
` 
  }

  showMealCheck(i:IIterator) {
    let str = ''    
    while(i.next()) {
      let meal: Meal = i.again()
      str += `${meal.getName()}, ${meal.getPrice()}, ${meal.getDescription()},`
    }
    return str
  }

}