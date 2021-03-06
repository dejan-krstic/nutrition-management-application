import { Modal, Button, Divider, Carousel, List } from "antd";
import { getIngredientsText, recipeInfoText } from "./helpers";
import { BUTTON_TEXT, RECIPE_SECTION } from "../../constants";
import FOOD_PLATE_IMAGE from "../../assets/food-plate-hand-drawn.png";
import "./RecipeModal.scss";

const RecipeModal = (props) => {
  return (
    <>
      <Modal
        visible={props.visible}
        title={props.title}
        width="40rem"
        style={{ maxWidth: "90vw" }}
        onOk={props.onClose}
        onCancel={props.onClose}
        footer={[
          <Button key="back" onClick={props.onDelete}>
            {BUTTON_TEXT.DELETE}
          </Button>,
          <Button key="back" onClick={props.onEdit}>
            {BUTTON_TEXT.EDIT}
          </Button>,
          <Button key="submit" type="primary" onClick={props.onClose}>
            {BUTTON_TEXT.CLOSE}
          </Button>,
        ]}
      >
        <Carousel autoplay style={{ height: "25rem" }}>
          {(props.images && props.images.length
            ? props.images
            : [FOOD_PLATE_IMAGE]
          ).map((imageSrc, index) => (
            <div className="recipe-modal-image-container" key={index}>
              <img
                src={imageSrc}
                style={{
                  margin: "0 auto",
                  height: "25rem",
                }}
                alt={props.title}
              />
            </div>
          ))}
        </Carousel>
        <p>{`${recipeInfoText(
          props.category,
          props.numberOfServings,
        )}, ready in ${props.readyInMinutes} minutes`}</p>
        <Divider orientation="left">{RECIPE_SECTION.DESCRIPTION}</Divider>{" "}
        <p>{props.description}</p>
        <Divider orientation="left">{RECIPE_SECTION.INGREDIENTS}</Divider>
        <List
          size="small"
          dataSource={getIngredientsText(props.ingredients)}
          renderItem={(item) => <List.Item key={item.name}>{item}</List.Item>}
        />
        <Divider orientation="left">{RECIPE_SECTION.INSTRUCTIONS}</Divider>{" "}
        <p>{props.instructions}</p>
      </Modal>
    </>
  );
};

export default RecipeModal;
