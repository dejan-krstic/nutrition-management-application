import { Row } from "antd";
import RecipeItem from "./RecipeItem";
import RecipeModal from "./RecipeModal";

const RecipeList = (props) => {
  return (
    <Row gutter={[48, 48]}>
      <RecipeModal />
      {props.items
        .filter((recipe) => recipe && recipe.ingredients)
        .map((recipe) => (
          <RecipeItem {...recipe} key={recipe.id} />
        ))}
    </Row>
  );
};

export default RecipeList;
