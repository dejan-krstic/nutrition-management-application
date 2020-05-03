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
      multiRecipes.push({ ...recipe, id: i + "." + recipe.id });
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
