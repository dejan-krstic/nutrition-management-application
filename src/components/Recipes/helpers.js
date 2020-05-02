import { MEASUREMENT_UNIT } from "../../constants";

export const recipeInfoText = (type, numberOfServings) =>
  `${type} for ${numberOfServings} person${numberOfServings < 2 ? "" : "s"}`;

export const getIngredientsText = (ingredients = []) => {
  console.log("ingredients", ingredients);
  return ingredients.map((ingredient) => {
    let prefix = "";
    let suffix = "";

    if (ingredient.unit === MEASUREMENT_UNIT.PIECE) {
      prefix = " ";
      if (ingredient.amount > 1) {
        suffix = "s";
      }
    }

    return `${ingredient.name} ${ingredient.amount}${prefix}${ingredient.unit}${suffix}`;
  });
};
