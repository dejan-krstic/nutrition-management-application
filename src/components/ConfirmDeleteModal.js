import React from "react";
import { Modal } from "antd";

const ConfirmDeleteModal = (props) => (
  <>
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={() => props.onOk(props.id)}
      onCancel={props.omCancel}
    >
      {props.children}
    </Modal>
  </>
);

export default ConfirmDeleteModal;
