import {
  CHOSE_MEAL,
  DELETE_RECIPE,
  SET_NEW_AMOUNT,
  SET_RECIPES,
  SET_USER_DATA,
  ADD_NEW_RECIPE,
  SET_DAYS_TO_PROVIDE,
  LOADING_STARTED,
  LOADING_FINISHED,
  SET_MEALS,
  SET_GROCERIES,
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
    case SET_MEALS: {
      const { meals } = action;
      return { ...state, meals };
    }
    case SET_GROCERIES: {
      const { groceries } = action;
      return { ...state, groceries };
    }

    case ADD_NEW_RECIPE: {
      const { recipe } = action;
      return { ...state, recipes: [...state.recipes, recipe] };
    }

    case SET_DAYS_TO_PROVIDE: {
      const { daysToProvide } = action;
      return { ...state, daysToProvide };
    }

    case SET_USER_DATA: {
      const { userData } = action;
      return { ...state, userData };
    }
    case LOADING_STARTED: {
      return { ...state, isLoading: state.isLoading + 1 };
    }
    case LOADING_FINISHED: {
      return { ...state, isLoading: state.isLoading - 1 };
    }
    default:
      return state;
  }
};

export default dataReducer;
