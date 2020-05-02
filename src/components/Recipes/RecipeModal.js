import { Modal, Button, Divider, Carousel, List } from "antd";
import { getIngredientsText, recipeInfoText } from "./helpers";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./RecipeModal.scss";

const RecipeModal = (props) => {
  const { width } = useWindowDimensions();
  const modalWidth = Math.min(600, 0.9 * width);
  return (
    <>
      <Modal
        visible={props.visible}
        title={props.title}
        width={modalWidth}
        onOk={props.handleClose}
        onCancel={props.handleClose}
        footer={[
          <Button key="back" onClick={props.handleDelete}>
            DELETE
          </Button>,
          <Button key="back" onClick={props.handleEdit}>
            EDIT
          </Button>,
          <Button key="submit" type="primary" onClick={props.handleClose}>
            CLOSE
          </Button>,
        ]}
      >
        <Carousel autoplay style={{ height: "400px" }}>
          {props.images &&
            props.images.map((imageSrc, index) => (
              <div className="recipe-modal-image-container" key={index}>
                <img
                  src={imageSrc}
                  style={{
                    margin: "0 auto",
                    height: "400px",
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
        <Divider orientation="left">Description</Divider>{" "}
        <p>{props.description}</p>
        <Divider orientation="left">Ingredients</Divider>
        <List
          size="small"
          dataSource={getIngredientsText(props.ingredients)}
          renderItem={(item) => <List.Item key={item.name}>{item}</List.Item>}
        />
        <Divider orientation="left">Instructions</Divider>{" "}
        <p>{props.instructions}</p>
      </Modal>
    </>
  );
};

export default RecipeModal;
