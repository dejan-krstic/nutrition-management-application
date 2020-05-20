import { createSelector } from "reselect";
import { createMealPlan, createShoppingList } from "./helpers";

export const locationSelector = (state) => state.router.location;

export const recipesSelector = (state) => state.data.recipes.data;
export const isLoadingRecipesSelector = (state) => state.data.recipes.isLoading;
export const areLoadedRecipesSelector = (state) => state.data.recipes.loaded;
export const mealsSelector = (state) => state.data.meals.data;
export const isLoadingMealsSelector = (state) => state.data.meals.isLoading;
export const areLoadedMealsSelector = (state) => state.data.meals.loaded;
export const groceriesSelector = (state) => state.data.groceries.data;
export const isLoadingGroceriesSelector = (state) =>
  state.data.groceries.isLoading;
export const areLoadedGroceriesSelector = (state) =>
  state.data.groceries.loaded;
export const daysToProvideSelector = (state) => state.data.daysToProvide;
export const userAvatarUrlSelector = (state) =>
  state.data.userData.picture.data.url;
export const notificationSelector = (state) => state.data.notificationData;

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
