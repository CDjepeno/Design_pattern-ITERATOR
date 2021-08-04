export class Meal {
  name: string;
  description: string;
  vegetarian: string;
  price: number

  constructor(n: string, d: string, v: string, p: number) {
    this.name = n 
    this.description = d 
    this.vegetarian = v
    this.price = p  
  }

}