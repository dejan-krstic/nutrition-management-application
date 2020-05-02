import { Card, Col, Carousel } from "antd";
import Meta from "antd/lib/card/Meta";
import { recipeInfoText } from "./helpers";
import { DoubleRightOutlined } from "@ant-design/icons";
import RecipeModal from "./RecipeModal";

import "./RecipeItem.scss";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const RecipeItem = (props) => {
  const { useState } = React;
  const [showRecipeModal, setOpenRecipeModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showRecipeModalHandler = () => setOpenRecipeModal(true);

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
        visible={showConfirmModal}
        handleCancel={cancelDelete}
        handleOk={confirmDeleteHandler}
      />
      <RecipeModal
        {...props}
        visible={showRecipeModal}
        handleDelete={handleDelete}
        handleEdit={() => {}}
        handleClose={closeRecipeModalHandler}
      />
      <Col xs={24} md={12} xl={8}>
        <Card
          cover={
            <Carousel style={{ height: "300px" }}>
              {props.images.map((imageSrc, index) => (
                <div key={index} className="recipe-item-image-container">
                  <img
                    src={imageSrc}
                    alt={props.title}
                    style={{
                      margin: "0 auto",
                      height: "300px",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          }
          actions={[
            <div style={{ fontSize: "16px" }} onClick={showRecipeModalHandler}>
              {recipeInfoText(props.category, props.numberOfServings)}{" "}
              <DoubleRightOutlined style={{ fontSize: "12px" }} />
            </div>,
          ]}
        >
          <Meta title={props.title} description={props.description} />
        </Card>
      </Col>
    </>
  );
};
export default RecipeItem;
