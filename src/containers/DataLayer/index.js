import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchFromServer } from "../../hooks/fetchFromServer";
import { message } from "antd";
import { getRecipes, getGroceries, getMeals } from "../../actions";
import { RECIPES_URL, MEALS_URL, GROCERIES_URL } from "./constants";

const DataLayer = ({ getRecipes, getMeals, getGroceries }) => {
  const { sendRequest } = fetchFromServer();
  const ACTIONS_MAPPER = {
    groceries: getGroceries,
    recipes: getRecipes,
    meals: getMeals,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = [RECIPES_URL, MEALS_URL, GROCERIES_URL].map((url) =>
          sendRequest(url),
        );
        const responses = await Promise.all(promises);
        responses.forEach((res) => {
          if (res.data) {
            for (const key in res.data) {
              if (res.data[key]) {
                ACTIONS_MAPPER[key](res.data[key]);
              }
            }
          }
        });
      } catch (error) {
        message.error(error);
      }
    };
    fetchData();
  }, []);

  return null;
};

export default connect(null, { getRecipes, getMeals, getGroceries })(DataLayer);
