import RecipeList from "../../../components/Recipes/RecipeList";
import { Col, Row } from "antd";
import { multiplyRecipes, CONFIRM_DELETE_RECIPE } from "../../../constants";
import { connect } from "react-redux";
import ConfirmDeleteModal from "../../../components/ConfirmDeleteModal";
import RecipeModal from "../../../components/Recipes/RecipeModal";
import { recipesSelector } from "../../../selectors";

const MyRecipes = (props) => {
  const { useState } = React;
  const [showRecipeModal, setOpenRecipeModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [recipeModalData, setRecipeModalData] = useState({});

  const showRecipeModalHandler = (recipe) => {
    setRecipeModalData(recipe);
    setOpenRecipeModal(true);
  };

  const closeRecipeModalHandler = () => setOpenRecipeModal(false);

  const handleDelete = () => {
    setShowConfirmModal(true);
  };

  const cancelDelete = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    //placeholder
  };
  return (
    <>
      <ConfirmDeleteModal
        title={CONFIRM_DELETE_RECIPE}
        visible={showConfirmModal}
        handleCancel={cancelDelete}
        handleOk={confirmDeleteHandler}
      >
        {recipeModalData.title}
      </ConfirmDeleteModal>
      <RecipeModal
        {...recipeModalData}
        visible={showRecipeModal}
        handleDelete={handleDelete}
        handleEdit={() => {}}
        handleClose={closeRecipeModalHandler}
      />
      <Row>
        <Col xs={1} md={4} />
        <Col xs={22} md={16}>
          <RecipeList
            items={multiplyRecipes(5, props.recipes)}
            showRecipeModalHandler={showRecipeModalHandler}
          />
        </Col>
        <Col xs={1} md={4} />
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
});

export default connect(mapStateToProps)(MyRecipes);
