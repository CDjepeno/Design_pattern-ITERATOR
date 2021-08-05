import { RunMeal } from "../src/RunMeal"

describe('Run Meal', () => {
  it('Should be return good string', () => {
    expect(RunMeal.main()).toBe(`
      Menu BRUNCH
      crêpe à l'oeuf, 2.99, crêpe avec oeuf au plat ou brouillé,crêpe à complete, 2.99, crêpe avec oeuf au plat et jambon,crêpe à forestière, 2.99, Myrtille fraiche et fruit rouges au choix,
      DEJEUNER
      Salade printanière, 3.99, salade,Soupe du jour, 3.99, soupe et couton grillé,Quiche aux épinards, 3.99, enpinard,
`)
  })


})
