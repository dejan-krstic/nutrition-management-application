import moment from "moment";
import {
  DAYS_INTO_FUTURE,
  RECIPE_CATEGORY,
  ID_DATE_FORMAT,
  PANEL_DATE_FORMAT,
  MEASUREMENT_UNIT,
} from "../constants";

const getAddNewRecipe = (type, recommendations) => ({
  id: type,
  title: `Please add ${type.toLocaleLowerCase()}`,
  images: [
    "http://icon-library.com/images/add-image-icon/add-image-icon-14.jpg",
  ],
  description: `We would recommend: ${recommendations[type]}`,
  enjoyMessage: "Enjoy ",
});

export const createMealPlan = (recipes, meals) => {
  const mealPlan = [];
  const recommendations = recipes.reduce(
    (acc, e) => {
      acc[e.category] += (acc[e.category] ? ", " : "") + e.title;
      return acc;
    },
    {
      [RECIPE_CATEGORY.BREAKFAST]: "",
      [RECIPE_CATEGORY.LUNCH]: "",
      [RECIPE_CATEGORY.DINNER]: "",
    },
  );
  for (let i = 0; i < DAYS_INTO_FUTURE; i++) {
    const dateMoment = moment().add(i, "d");
    const dateId = +dateMoment.format(ID_DATE_FORMAT);
    const breakfastMeal = meals.find(
      (meal) => meal.date == dateId && meal.type === RECIPE_CATEGORY.BREAKFAST,
    );
    const lunchMeal = meals.find(
      (meal) => meal.date == dateId && meal.type === RECIPE_CATEGORY.LUNCH,
    );
    const dinnerMeal = meals.find(
      (meal) => meal.date == dateId && meal.type === RECIPE_CATEGORY.DINNER,
    );
    const breakfastRecipe = breakfastMeal
      ? recipes.find((r) => r.id == breakfastMeal.recipe)
      : getAddNewRecipe(RECIPE_CATEGORY.BREAKFAST, recommendations);
    const lunchRecipe = lunchMeal
      ? recipes.find((r) => r.id == lunchMeal.recipe)
      : getAddNewRecipe(RECIPE_CATEGORY.LUNCH, recommendations);
    const dinnerRecipe = dinnerMeal
      ? recipes.find((r) => r.id == dinnerMeal.recipe)
      : getAddNewRecipe(RECIPE_CATEGORY.DINNER, recommendations);
    const day = {
      id: dateId,
      panelDate: dateMoment.format(PANEL_DATE_FORMAT),
      hasMeals: [!!breakfastMeal, !!lunchMeal, !!dinnerMeal],
      recipes: [breakfastRecipe, lunchRecipe, dinnerRecipe],
    };
    mealPlan.push(day);
  }
  return mealPlan;
};

export const createShoppingList = (
  recipes,
  meals,
  availableGroceries,
  daysToProvide,
) => {
  const dateMoment = moment();
  const beginningDate = dateMoment.format(ID_DATE_FORMAT);
  const endDate = dateMoment.add(daysToProvide, "d").format(ID_DATE_FORMAT);
  const ingredientArray = meals
    .filter((meal) => +meal.date > +beginningDate && +meal.date <= +endDate)
    .map((meal) => recipes.find(({ id }) => id == meal.recipe))
    .filter((recipe) => recipe.ingredients)
    .reduce((acc, e) => acc.concat(e.ingredients), []);

  const necessaryGroceries = [];
  ingredientArray.forEach((ingredient) => {
    const groceryToUpdate = necessaryGroceries.find(
      (grocery) => grocery.name === ingredient.name,
    );
    if (groceryToUpdate) {
      groceryToUpdate.amount +=
        ingredient.unit === MEASUREMENT_UNIT.G
          ? ingredient.amount / 1000
          : ingredient.amount;
    } else {
      necessaryGroceries.push({
        name: ingredient.name,
        amount:
          ingredient.unit === MEASUREMENT_UNIT.G
            ? ingredient.amount / 1000
            : ingredient.amount,
        unit:
          ingredient.unit === MEASUREMENT_UNIT.G
            ? MEASUREMENT_UNIT.KG
            : ingredient.unit,
      });
    }
  });
  const shoppingList = [];
  necessaryGroceries.forEach((grocery) => {
    const availableGrocery = availableGroceries.find(
      (g) => grocery.name === g.name,
    );
    if (availableGrocery) {
      const amount = grocery.amount - availableGrocery.amount;
      if (amount > 0) {
        shoppingList.push({
          ...grocery,
          amount: parseFloat(amount.toFixed(2)),
        });
      }
    } else {
      shoppingList.push({
        ...grocery,
        amount: parseFloat(grocery.amount.toFixed(2)),
      });
    }
  });
  return shoppingList;
};
