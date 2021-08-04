/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private children: MealCompositeProtocol[] = [];

  addMeal(...meal: MealCompositeProtocol[]): void {
    meal.forEach((m) => this.children.push(m));
  }

  getPrice():number {
    const reducer = this.children.reduce((ac, meal) => ac += meal.getPrice(), 0);
    return reducer;
  }
}
