import {
  CHOSE_MEAL,
  DELETE_RECIPE,
  SET_NEW_AMOUNT,
  SET_RECIPES,
  SET_USER_DATA,
} from "./actionTypes";

export const choseMealOnDate = (date, type, recipe) => (dispatch) => {
  dispatch({
    type: CHOSE_MEAL,
    payload: { date, type, recipe },
  });
};

export const deleteRecipe = (id) => (dispatch) => {
  dispatch({
    type: DELETE_RECIPE,
    id,
  });
};

export const setNewAmount = (name, amount) => (dispatch) => {
  dispatch({
    type: SET_NEW_AMOUNT,
    payload: { name, amount },
  });
};

export const setRecipes = (recipes) => (dispatch) => {
  dispatch({
    type: SET_RECIPES,
    recipes,
  });
};

export const setUserData = (userData) => (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
    userData,
  });
};
