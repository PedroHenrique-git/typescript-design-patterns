import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import {
  Rice, Beans, Meat, Beverage, Dessert,
} from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
    private meal: MealBox = new MealBox();

    reset(): this {
      this.meal = new MealBox();
      return this;
    }

    makeMeal(): this {
      const rice = new Rice('Arroz', 5.00);
      const beans = new Beans('Feijão', 10.00);
      const meat = new Meat('Arroz', 5.00);
      const beverage = new Beverage('Arroz', 5.00);
      this.meal.addMeal(rice, beans, meat, beverage);
      return this;
    }

    makeBeverage(): this {
      const beverage = new Beverage('Bebida', 7.00);
      this.meal.addMeal(beverage);
      return this;
    }

    makeDessert(): this {
      const dessert = new Dessert('Pudim', 7.00);
      this.meal.addMeal(dessert);
      return this;
    }

    getMeal(): MealBox {
      const { meal } = this;
      this.reset();
      return meal;
    }

    getPrice(): number {
      return this.meal.getPrice();
    }
}
