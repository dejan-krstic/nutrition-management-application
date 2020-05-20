import {
  CHOOSE_MEAL_SUCCESS,
  DELETE_RECIPE_SUCCESS,
  SET_NEW_AMOUNT,
  GET_RECIPES_SUCCESS,
  SET_USER_DATA,
  ADD_EDIT_RECIPE_SUCCESS,
  SET_DAYS_TO_PROVIDE,
  LOADING_STARTED,
  LOADING_FINISHED,
  GET_MEALS_SUCCESS,
  GET_GROCERIES_SUCCESS,
  GET_RECIPES_BEGIN,
  GET_RECIPES_ERROR,
  GET_MEALS_BEGIN,
  GET_MEALS_ERROR,
  GET_GROCERIES_BEGIN,
  GET_GROCERIES_ERROR,
  ADD_EDIT_RECIPE_ERROR,
  DELETE_RECIPE_ERROR,
  CHOOSE_MEAL_ERROR,
} from "./actionTypes";
import { apiService } from "../services/api/apiService";

export const choseMealOnDate = (mealPlan, date, type, recipe) => async (
  dispatch,
) => {
  try {
    let id;
    const mealToDelete = mealPlan.find(
      (meal) => meal.date == date && meal.type === type,
    );

    if (recipe === null) {
      if (mealToDelete) {
        const response = await apiService.delete(`/meals/${mealToDelete.id}`);

        if (response.statusText !== "OK") {
          throw new Error("Couldn't clear meal");
        }
      }
    } else {
      const idToDelete = mealToDelete?.id || "";

      const response = await apiService[idToDelete ? "put" : "post"](
        `/meals/${idToDelete}`,
        JSON.stringify({ date, type, recipe }),
      );
      id = response?.data?.id;
      if (response.statusText !== "Created" && response.statusText !== "OK") {
        throw new Error("Couldn't add meal");
      }
    }
    dispatch({
      type: CHOOSE_MEAL_SUCCESS,
      payload: { date, type, recipe, id },
    });
  } catch (error) {
    dispatch({
      type: CHOOSE_MEAL_ERROR,
      message: error.message,
    });
  }
};

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    const response = await apiService.delete("/recipes/" + id);
    if (response.statusText === "OK") {
      dispatch({
        type: DELETE_RECIPE_SUCCESS,
        id,
        message: `Recipe has been deleted!`,
      });
    } else {
      throw new Error("Couldn't delete recipe");
    }
  } catch (error) {
    dispatch({
      type: DELETE_RECIPE_ERROR,
      message: error.message,
    });
  }
};

export const setNewAmount = (name, amount) => (dispatch) => {
  dispatch({
    type: SET_NEW_AMOUNT,
    payload: { name, amount },
  });
};

export const getRecipes = () => async (dispatch) => {
  dispatch({
    type: GET_RECIPES_BEGIN,
  });
  try {
    const response = await apiService.get("/recipes");
    if (response?.data) {
      dispatch({
        type: GET_RECIPES_SUCCESS,
        data: response.data,
      });
    } else {
      throw new Error("Couldn't load recipes");
    }
  } catch (error) {
    dispatch({
      type: GET_RECIPES_ERROR,
      message: error.message,
    });
  }
};
export const getMeals = () => async (dispatch) => {
  dispatch({
    type: GET_MEALS_BEGIN,
  });
  try {
    const response = await apiService.get("/meals");
    if (response?.data) {
      dispatch({
        type: GET_MEALS_SUCCESS,
        data: response.data,
      });
    } else {
      throw new Error("Couldn't load meals data");
    }
  } catch (error) {
    dispatch({
      type: GET_MEALS_ERROR,
      message: error.message,
    });
  }
};

export const getGroceries = () => async (dispatch) => {
  dispatch({
    type: GET_GROCERIES_BEGIN,
  });
  try {
    const response = await apiService.get("/groceries");
    if (response?.data) {
      dispatch({
        type: GET_GROCERIES_SUCCESS,
        data: response.data,
      });
    } else {
      throw new Error("Couldn't load groceries data");
    }
  } catch (error) {
    dispatch({
      type: GET_GROCERIES_ERROR,
      message: error.message,
    });
  }
};

export const setUserData = (userData) => (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
    userData,
  });
};

export const setDaysToProvide = (daysToProvide) => (dispatch) => {
  dispatch({
    type: SET_DAYS_TO_PROVIDE,
    daysToProvide,
  });
};

export const addNewRecipe = (recipe) => async (dispatch) => {
  try {
    const response = await apiService[recipe.id ? "put" : "post"](
      `/recipes/${recipe.id || ""}`,
      JSON.stringify(recipe),
    );
    if (response?.data) {
      dispatch({
        type: ADD_EDIT_RECIPE_SUCCESS,
        recipe: response.data,
        message: `Recipe has been ${recipe.id ? "edited" : "added"}!`,
      });
    } else {
      throw new Error("Couldn't save changes");
    }
  } catch (error) {
    dispatch({
      type: ADD_EDIT_RECIPE_ERROR,
      message: error.message,
    });
  }
};

export const loadingStarted = () => (dispatch) => {
  dispatch({
    type: LOADING_STARTED,
  });
};

export const loadingFinished = () => (dispatch) => {
  dispatch({
    type: LOADING_FINISHED,
  });
};
