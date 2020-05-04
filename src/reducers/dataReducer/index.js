import {
  CHOSE_MEAL,
  DELETE_RECIPE,
  SET_NEW_AMOUNT,
  SET_RECIPES,
} from "../../actions/actionTypes";
import { initialState } from "./initialState";

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOSE_MEAL: {
      const { recipe, date, type } = action.payload;
      const newMeals = state.meals.filter(
        (meal) => !(meal.date == date && meal.type === type),
      );
      if (recipe !== null) {
        newMeals.push({
          date,
          type,
          recipe,
        });
      }
      return {
        ...state,
        meals: newMeals,
      };
    }
    case DELETE_RECIPE: {
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id != action.id),
      };
    }
    case SET_NEW_AMOUNT: {
      const { amount, name } = action.payload;
      const grocery = state.groceries.find((g) => g.name === name);
      const newGroceries = state.groceries.filter((g) => g.name !== name);
      newGroceries.push({ ...grocery, amount });
      return {
        ...state,
        groceries: newGroceries,
      };
    }
    case SET_RECIPES: {
      const { recipes } = action;
      return { ...state, recipes };
    }
    default:
      return state;
  }
};

export default dataReducer;
