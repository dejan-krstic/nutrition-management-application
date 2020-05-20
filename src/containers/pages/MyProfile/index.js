import { connect } from "react-redux";
import AddNewRecipe from "../../../components/AddNewRecipe";
import { Typography } from "antd";
import { addNewRecipe } from "../../../actions";
import { useCallback } from "react";
import { locationSelector } from "../../../selectors";

const MyProfile = ({ addNewRecipe, location }) => {
  const addNewRecipeHandler = useCallback(
    (recipe) => {
      addNewRecipe(recipe);
    },
    [addNewRecipe],
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
  location: locationSelector(state),
});

export default connect(mapStateToProps, { addNewRecipe })(MyProfile);
