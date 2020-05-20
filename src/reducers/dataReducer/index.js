import {
  CHOOSE_MEAL_SUCCESS,
  DELETE_RECIPE_SUCCESS,
  SET_NEW_AMOUNT,
  GET_RECIPES_SUCCESS,
  SET_USER_DATA,
  ADD_EDIT_RECIPE_SUCCESS,
  SET_DAYS_TO_PROVIDE,
  DELETE_RECIPE_ERROR,
  GET_MEALS_SUCCESS,
  GET_GROCERIES_SUCCESS,
  GET_RECIPES_ERROR,
  GET_MEALS_ERROR,
  GET_GROCERIES_ERROR,
  GET_RECIPES_BEGIN,
  GET_MEALS_BEGIN,
  GET_GROCERIES_BEGIN,
  CHOOSE_MEAL_ERROR,
  ADD_EDIT_RECIPE_ERROR,
} from "../../actions/actionTypes";
import { initialState } from "./initialState";
import { NOTIFICATION_TYPE } from "../../constants";

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_MEAL_SUCCESS: {
      const { recipe, date, type, id } = action.payload;
      const data = state.meals.data.filter(
        (meal) => !(meal.date == date && meal.type === type),
      );
      if (recipe !== null) {
        data.push({
          date,
          type,
          recipe,
          id,
        });
      }
      return {
        ...state,
        meals: {
          ...state.meals,
          data,
        },
      };
    }

    case DELETE_RECIPE_SUCCESS: {
      const { id, message } = action;
      return {
        ...state,
        notificationData: { type: NOTIFICATION_TYPE.SUCCESS, message },
        recipes: {
          ...state.recipes,
          data: state.recipes.data.filter((recipe) => recipe.id != id),
        },
      };
    }

    case SET_NEW_AMOUNT: {
      const { amount, name } = action.payload;
      const grocery = state.groceries.data.find((g) => g.name === name);
      const data = state.groceries.data.filter((g) => g.name !== name);
      data.push({ ...grocery, amount });
      return {
        ...state,
        groceries: {
          ...state.groceries,
          data,
        },
      };
    }

    case GET_RECIPES_BEGIN: {
      return {
        ...state,
        recipes: {
          ...state.recipes,
          isLoading: state.recipes.isLoading + 1,
        },
      };
    }
    case GET_RECIPES_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        recipes: {
          ...state.recipes,
          data,
          isLoading: state.recipes.isLoading - 1,
          loaded: true,
        },
      };
    }
    case GET_RECIPES_ERROR: {
      const { message } = action;
      return {
        ...state,
        notificationData: { type: NOTIFICATION_TYPE.ERROR, message },
        recipes: {
          ...state.recipes,
          isLoading: state.recipes.isLoading - 1,
        },
      };
    }
    case GET_MEALS_BEGIN: {
      return {
        ...state,
        meals: {
          ...state.meals,
          isLoading: state.meals.isLoading + 1,
        },
      };
    }
    case GET_MEALS_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        meals: {
          ...state.meals,
          data,
          isLoading: state.meals.isLoading - 1,
          loaded: true,
        },
      };
    }
    case GET_MEALS_ERROR: {
      const { message } = action;
      return {
        ...state,
        notificationData: { type: NOTIFICATION_TYPE.ERROR, message },
        meals: {
          ...state.meals,
          isLoading: state.meals.isLoading - 1,
        },
      };
    }
    case GET_GROCERIES_BEGIN: {
      return {
        ...state,
        groceries: {
          ...state.groceries,
          isLoading: state.groceries.isLoading + 1,
        },
      };
    }
    case GET_GROCERIES_SUCCESS: {
      const { data } = action;
      return {
        ...state,
        groceries: {
          ...state.groceries,
          data,
          isLoading: state.groceries.isLoading - 1,
          loaded: true,
        },
      };
    }

    case GET_GROCERIES_ERROR: {
      const { message } = action;
      return {
        ...state,
        notificationData: { type: NOTIFICATION_TYPE.ERROR, message },
        groceries: {
          ...state.groceries,
          isLoading: state.groceries.isLoading - 1,
        },
      };
    }

    case ADD_EDIT_RECIPE_SUCCESS: {
      const { recipe, message } = action;
      let index = state.recipes.data.findIndex(({ id }) => id == recipe.id);
      if (index === -1) {
        index = state.recipes.data.length;
      }
      const data = [
        ...state.recipes.data.slice(0, index),
        recipe,
        ...state.recipes.data.slice(index + 1),
      ];
      return {
        ...state,
        notificationData: { type: NOTIFICATION_TYPE.SUCCESS, message },
        recipes: {
          ...state.recipes,
          data,
        },
      };
    }

    case ADD_EDIT_RECIPE_ERROR:
    case CHOOSE_MEAL_ERROR:
    case DELETE_RECIPE_ERROR: {
      const { message } = action;
      return {
        ...state,
        notificationData: { type: NOTIFICATION_TYPE.ERROR, message },
      };
    }

    case SET_DAYS_TO_PROVIDE: {
      const { daysToProvide } = action;
      return { ...state, daysToProvide };
    }

    case SET_USER_DATA: {
      const { userData } = action;
      return { ...state, userData };
    }
    default:
      return state;
  }
};

export default dataReducer;
