import { connect } from "react-redux";
import AddNewRecipe from "../../../components/AddNewRecipe";
import { Typography } from "antd";
import { addNewRecipe } from "../../../actions";
import { useCallback } from "react";
import { recipesSelector, locationSelector } from "../../../selectors";
import { RECIPE_PROPERTY } from "../../../constants";

const MyProfile = ({ addNewRecipe, recipes, location }) => {
  const addNewRecipeHandler = useCallback(
    (recipe) => {
      if (!recipe[RECIPE_PROPERTY.ID]) {
        recipe[RECIPE_PROPERTY.ID] =
          1 +
          (recipes.length &&
            Math.max(
              ...recipes
                .map((recipe) => recipe[RECIPE_PROPERTY.ID])
                .filter((id) => id && typeof id === "number" && !isNaN(id)),
            ));
      }
      addNewRecipe(recipe);
    },
    [addNewRecipe, recipes],
  );

  return (
    <>
      <Typography.Title
        level={1}
        style={{ textAlign: "center", color: "#666" }}
      >
        ADD NEW RECIPE
      </Typography.Title>
      <AddNewRecipe
        onAddNewRecipe={addNewRecipeHandler}
        recipe={location && location.state && JSON.parse(location.state)}
      />
      ;
    </>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
  location: locationSelector(state),
});

export default connect(mapStateToProps, { addNewRecipe })(MyProfile);
