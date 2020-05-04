import { Modal, Button, Row } from "antd";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import RecipeItem from "../Recipes/RecipeItem";
import { DEFAULT_GUTTER } from "../../constants";

const WhatToEatModal = (props) => {
  const { width } = useWindowDimensions();
  const modalWidth = Math.min(1200, 0.9 * width);
  return (
    <>
      <Modal
        visible={props.visible}
        title={props.title}
        width={modalWidth}
        onOk={props.handleClose}
        onCancel={props.handleClose}
        footer={[
          <Button key="back" onClick={() => props.handleChose(null)}>
            CLEAR
          </Button>,
          <Button key="back" type="primary" onClick={props.handleClose}>
            CLOSE
          </Button>,
        ]}
      >
        <Row gutter={[DEFAULT_GUTTER, DEFAULT_GUTTER]} justify="space-around">
          {props.items.map((recipe) => (
            <RecipeItem
              {...recipe}
              key={recipe.id}
              chooseMealHandler={props.handleChose}
            />
          ))}
        </Row>
      </Modal>
    </>
  );
};

export default WhatToEatModal;
