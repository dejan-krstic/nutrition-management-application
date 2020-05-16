import RecipeList from "../../../components/Recipes/RecipeList";
import { Col, Row, Empty, Button } from "antd";
import {
  multiplyRecipes,
  CONFIRM_DELETE_RECIPE,
  NAVIGATION_LINKS,
} from "../../../constants";
import { connect } from "react-redux";
import ConfirmDeleteModal from "../../../components/ConfirmDeleteModal";
import RecipeModal from "../../../components/Recipes/RecipeModal";
import { recipesSelector, isLoadingSelector } from "../../../selectors";
import { deleteRecipe, setRecipes } from "../../../actions";
import navigationHook from "../../../hooks/navigation";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchFromServer } from "../../../hooks/fetchFromServer";

const MyRecipes = (props) => {
  const { useState } = React;
  const [showRecipeModal, setOpenRecipeModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [recipeModalData, setRecipeModalData] = useState({});
  const { historyPush } = navigationHook();
  const { isLoading } = fetchFromServer();

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

  const handleCreateNew = () => {
    historyPush(NAVIGATION_LINKS.myProfile.path);
  };

  const handleRecipeEdit = () => {
    historyPush(
      NAVIGATION_LINKS.myProfile.path,
      JSON.stringify(recipeModalData),
    );
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
          <Button type="primary" onClick={handleCreateNew}>
            Create Now
          </Button>
        </Empty>
      )}
      <Row justify="space-around">
        <Col xs={23} xxl={16}>
          {props.isLoading ? (
            <LoadingOutlined />
          ) : (
            <RecipeList
              items={multiplyRecipes(3, props.recipes)}
              showRecipeModalHandler={showRecipeModalHandler}
            />
          )}
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
        handleEdit={handleRecipeEdit}
        handleClose={closeRecipeModalHandler}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
  isLoading: isLoadingSelector(state),
});

export default connect(mapStateToProps, { deleteRecipe, setRecipes })(
  MyRecipes,
);
