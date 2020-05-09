export const RECIPE_CATEGORY = {
  BREAKFAST: "Breakfast",
  LUNCH: "Lunch",
  DINNER: "Dinner",
};

export const MEASUREMENT_UNIT = {
  KG: "kg",
  G: "g",
  L: "l",
  PIECE: "piece",
};

export const multiplyRecipes = (repetition, recipes) => {
  const multiRecipes = [];
  for (let i = 0; i < repetition; i++) {
    recipes.forEach((recipe) => {
      multiRecipes.push({ ...recipe, key: i + "." + recipe.id });
    });
  }
  return multiRecipes;
};

export const CONFIRM_DELETE_RECIPE = "Do you want to delete this recipe?";
export const DEFAULT_GUTTER = 48;
export const ID_DATE_FORMAT = "YYYYMMDD";
export const PANEL_DATE_FORMAT = "dddd, MMMM Do";
export const DAYS_INTO_FUTURE = 30;
export const GROCERIES = "AVAILABLE GROCERIES";
export const SHOPPING_LIST = "SHOPPING LIST";
export const DEFAULT_URL =
  "https://my-json-server.typicode.com/dejan-krstic/nutrition-management-application/";
export const FOOTER_MSG =
  "Nutrition Management ©2020 Created by Ancient Technologies";

export const NAVIGATION_LINKS = {
  myRecipes: {
    text: "MY RECIPES",
    path: "/",
  },
  mealPlan: {
    text: "MEAL PLAN",
    path: "/meal-plan",
  },
  groceries: {
    text: "GROCERIES",
    path: "/groceries",
  },
  shoppingList: {
    text: "SHOPPING LIST",
    path: "/shopping-list",
  },
  myProfile: {
    text: "MY PROFILE",
    path: "/my-profile",
  },
};

export const BUTTON_TEXT = {
  CLOSE: "CLOSE",
  DELETE: "DELETE",
  EDIT: "EDIT",
};

export const RECIPE_SECTION = {
  DESCRIPTION: "Description",
  INGREDIENTS: "Ingredients",
  INSTRUCTIONS: "Instructions",
};
