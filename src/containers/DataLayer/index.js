import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchFromServer } from "../../hooks/fetchFromServer";
import { message } from "antd";
import { setRecipes, setGroceries, setMeals } from "../../actions";
import { RECIPES_URL, MEALS_URL, GROCERIES_URL } from "./constants";

const DataLayer = ({ setRecipes, setMeals, setGroceries }) => {
  const { sendRequest } = fetchFromServer();
  const ACTIONS_MAPPER = {
    groceries: setGroceries,
    recipes: setRecipes,
    meals: setMeals,
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

export default connect(null, { setRecipes, setMeals, setGroceries })(DataLayer);
