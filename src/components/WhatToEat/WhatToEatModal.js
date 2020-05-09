import { Modal, Button, Row } from "antd";
import RecipeItem from "../Recipes/RecipeItem";
import { DEFAULT_GUTTER } from "../../constants";

const WhatToEatModal = (props) => {
  return (
    <>
      <Modal
        visible={props.visible}
        title={props.title}
        width="80rem"
        style={{ maxWidth: "95vw" }}
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
