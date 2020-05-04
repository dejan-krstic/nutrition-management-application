import { Col, Row } from "antd";
import { connect } from "react-redux";
import { shoppingListSelector } from "../../../selectors";
import ItemList from "../../../components/ItemList";
import { SHOPPING_LIST } from "../../../constants";

const ShoppingList = (props) => {
  return (
    <Row justify="center">
      <Col xs={22} md={6}>
        <ItemList {...props} header={SHOPPING_LIST} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: shoppingListSelector(state),
});

export default connect(mapStateToProps)(ShoppingList);
