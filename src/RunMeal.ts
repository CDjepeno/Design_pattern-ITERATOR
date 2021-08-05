import { MealCafeteria } from './classes/MealCafeteria';
import { MealCreperie } from './classes/MealCreperie';
import { Server } from './classes/Server';
import { IIterator } from './interfaces/IIterator';
export class RunMeal {
  static main1(): string {
    let mealCreperie = new MealCreperie()
    let mealCafeteria = new MealCafeteria()

    mealCreperie.addMeal("crêpe à l'oeuf", "crêpe avec oeuf au plat ou brouillé", true, 2.99)
    mealCreperie.addMeal("crêpe à complete", "crêpe avec oeuf au plat et jambon", true, 2.99)
    mealCreperie.addMeal("crêpe à forestière", "Myrtille fraiche et fruit rouges au choix", true, 2.99)


    mealCafeteria.addMeal("Salade printanière", "salade", true, 3.99)
    mealCafeteria.addMeal("Soupe du jour", "soupe et couton grillé", true, 3.99)
    mealCafeteria.addMeal("Quiche aux épinards", "enpinard", true, 3.99)


    let server = new Server(mealCreperie, mealCafeteria)

    return server.showMeal()
  }

}