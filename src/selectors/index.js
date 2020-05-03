import { createSelector } from "reselect";
import { createMealPlan, createShoppingList } from "./helpers";

export const recipesSelector = (state) => state.data.recipes;
export const mealsSelector = (state) => state.data.meals;
export const groceriesSelector = (state) => state.data.groceries;
export const daysToProvideSelector = (state) => state.data.daysToProvide;

export const mealPlanSelector = createSelector(
  recipesSelector,
  mealsSelector,
  createMealPlan,
);

export const shoppingListSelector = createSelector(
  recipesSelector,
  mealsSelector,
  groceriesSelector,
  daysToProvideSelector,
  createShoppingList,
);
