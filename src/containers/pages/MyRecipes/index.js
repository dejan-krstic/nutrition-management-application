import React, { useEffect, useState } from "react";
import RecipeList from "../../../components/Recipes/RecipeList";
import { Col, Row, Empty, Button, Spin } from "antd";
import {
  multiplyRecipes,
  CONFIRM_DELETE_RECIPE_SUCCESS,
  NAVIGATION_LINKS,
} from "../../../constants";
import { connect } from "react-redux";
import ConfirmDeleteModal from "../../../components/ConfirmDeleteModal";
import RecipeModal from "../../../components/Recipes/RecipeModal";
import {
  recipesSelector,
  isLoadingRecipesSelector,
  areLoadedRecipesSelector,
} from "../../../selectors";
import { deleteRecipe, getRecipes } from "../../../actions";
import navigationHook from "../../../hooks/navigation";

export const MyRecipes = ({
  recipes,
  isLoadingRecipes,
  recipesLoaded,
  deleteRecipe,
  getRecipes,
}) => {
  const [showRecipeModal, setOpenRecipeModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [recipeModalData, setRecipeModalData] = useState({});
  const { historyPush } = navigationHook();

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

  const confirmDeleteHandler = (id) => {
    deleteRecipe(id);
    setShowConfirmModal(false);
    closeRecipeModalHandler();
  };

  const handleCreateNew = () => {
    historyPush(NAVIGATION_LINKS.myProfile.path);
  };

  const handleRecipeEdit = () => {
    historyPush(
      NAVIGATION_LINKS.myProfile.path,
      JSON.stringify(recipeModalData),
    );
  };

  useEffect(() => {
    if (!isLoadingRecipes && !recipesLoaded) {
      getRecipes();
    }
  }, [isLoadingRecipes, recipesLoaded]);

  return (
    <>
      {!recipes.length && !isLoadingRecipes && (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={<span>No recipes exist, maybe create one?</span>}
        >
          <Button type="primary" onClick={handleCreateNew}>
            Create Now
          </Button>
        </Empty>
      )}
      <Row justify="space-around">
        <Col xs={23} xxl={16}>
          {isLoadingRecipes ? (
            <Row justify="center" style={{ marginTop: "30vh" }}>
              <Spin size="large" />
            </Row>
          ) : (
            <RecipeList
              items={multiplyRecipes(3, recipes)}
              showRecipeModalHandler={showRecipeModalHandler}
            />
          )}
        </Col>
      </Row>
      <ConfirmDeleteModal
        title={CONFIRM_DELETE_RECIPE_SUCCESS}
        id={recipeModalData.id}
        visible={showConfirmModal}
        onCancel={cancelDelete}
        onOk={confirmDeleteHandler}
      >
        {recipeModalData.title}
      </ConfirmDeleteModal>
      <RecipeModal
        {...recipeModalData}
        visible={showRecipeModal}
        onDelete={handleDelete}
        onEdit={handleRecipeEdit}
        onClose={closeRecipeModalHandler}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
  isLoadingRecipes: isLoadingRecipesSelector(state),
  recipesLoaded: areLoadedRecipesSelector(state),
});

export default connect(mapStateToProps, { deleteRecipe, getRecipes })(
  MyRecipes,
);
