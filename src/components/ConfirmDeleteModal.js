import { Modal } from "antd";

const ConfirmDeleteModal = (props) => (
  <>
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    >
      {props.children}
    </Modal>
  </>
);

export default ConfirmDeleteModal;
