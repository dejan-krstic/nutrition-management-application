import RecipeList from "../../../components/Recipes/RecipeList";
import { Col, Row, message, Empty } from "antd";
import { multiplyRecipes, CONFIRM_DELETE_RECIPE } from "../../../constants";
import { connect } from "react-redux";
import ConfirmDeleteModal from "../../../components/ConfirmDeleteModal";
import RecipeModal from "../../../components/Recipes/RecipeModal";
import { recipesSelector } from "../../../selectors";
import { deleteRecipe, setRecipes } from "../../../actions";
import { fetchFromServer } from "../../../hooks/fetchFromServer";
import { useEffect } from "react";

const MyRecipes = (props) => {
  const { useState, useEffect } = React;
  const [showRecipeModal, setOpenRecipeModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [recipeModalData, setRecipeModalData] = useState({});
  const { sendRequest, isLoading } = fetchFromServer();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await sendRequest("recipes");

        props.setRecipes(response.recipes);
      } catch (error) {
        message.error(error);
      }
    };

    if (!Array.isArray(props.recipes) || !props.recipes.length) {
      fetchRecipes();
    }
  }, [sendRequest]);

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
    props.deleteRecipe(id);
    setShowConfirmModal(false);
    closeRecipeModalHandler();
  };
  return (
    <>
      {!props.recipes.length && !isLoading && (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={<span>No recipes exist, maybe create one?</span>}
        >
          <Button type="primary">Create Now</Button>
        </Empty>
      )}
      <Row justify="space-around">
        <Col xs={23} xxl={16}>
          <RecipeList
            items={multiplyRecipes(5, props.recipes)}
            showRecipeModalHandler={showRecipeModalHandler}
          />
        </Col>
      </Row>
      <ConfirmDeleteModal
        title={CONFIRM_DELETE_RECIPE}
        id={recipeModalData.id}
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
    </>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
});

export default connect(mapStateToProps, { deleteRecipe, setRecipes })(
  MyRecipes,
);
