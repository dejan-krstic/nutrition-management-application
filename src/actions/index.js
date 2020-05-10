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
export const setMeals = (meals) => (dispatch) => {
  dispatch({
    type: SET_MEALS,
    meals,
  });
};
export const setGroceries = (groceries) => (dispatch) => {
  dispatch({
    type: SET_GROCERIES,
    groceries,
  });
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

export const addNewRecipe = (recipe) => (dispatch) => {
  dispatch({
    type: ADD_NEW_RECIPE,
    recipe,
  });
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
