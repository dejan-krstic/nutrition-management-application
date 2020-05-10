import { connect } from "react-redux";
import AddNewRecipe from "../../../components/AddNewRecipe";
import { Typography } from "antd";
import { addNewRecipe } from "../../../actions";
import { useCallback } from "react";
import { recipesSelector } from "../../../selectors";

const MyProfile = ({ addNewRecipe, recipes }) => {
  const addNewRecipeHandler = useCallback(
    (recipe) => {
      const id = +Math.max(...recipes.map((recipe) => recipe.id)) + 1;
      addNewRecipe({ ...recipe, id });
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
      <AddNewRecipe onAddNewRecipe={addNewRecipeHandler} />;
    </>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
});

export default connect(mapStateToProps, { addNewRecipe })(MyProfile);
