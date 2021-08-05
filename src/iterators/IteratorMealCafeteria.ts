import { IIterator } from '../interfaces/IIterator';
import { Meal } from '../classes/Meal';
export class IteratorMealCafeteria implements IIterator {
  items: Meal[]
  position: number = 0

  constructor(i: Meal[]) {
    this.items = i
  }

  again() {
    let meal: Meal = this.items[this.position]
    this.position = this.position + 1
    return meal
  }

  next() {
    if(this.position >= this.items.length || this.items[this.position] == null) {
      return false
    } else {
      return true
    }
  }
}