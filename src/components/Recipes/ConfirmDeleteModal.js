import { Modal } from "antd";

const ConfirmDeleteModal = (props) => (
  <>
    <Modal
      title="Do you want to delete this recipe"
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
    />
  </>
);

export default ConfirmDeleteModal;
