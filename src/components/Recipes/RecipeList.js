import { Row } from "antd";
import RecipeItem from "./RecipeItem";
import { DEFAULT_GUTTER } from "../../constants";

const RecipeList = (props) => {
  return (
    <Row
      gutter={[{ xs: 0, sm: DEFAULT_GUTTER }, DEFAULT_GUTTER]}
      justify="center"
    >
      {props.items
        .filter((recipe) => recipe && recipe.ingredients)
        .map((recipe) => (
          <RecipeItem
            {...recipe}
            key={recipe.key || recipe.id}
            showRecipeModalHandler={props.showRecipeModalHandler}
          />
        ))}
    </Row>
  );
};

export default RecipeList;
