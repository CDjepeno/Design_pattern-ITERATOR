export class Meal {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number

  constructor(n: string, d: string, v: boolean, p: number) {
    this.name = n 
    this.description = d 
    this.vegetarian = v
    this.price = p  
  }

  getName() {
    return this.name
  }

  getDescription() {
    return this.description
  }

  isVegetarian() {
    return this.vegetarian
  }

  getPrice() {
    return this.price
  }



}