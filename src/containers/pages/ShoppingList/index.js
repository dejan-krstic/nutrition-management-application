import { Col, Row } from "antd";
import { connect } from "react-redux";
import { shoppingListSelector } from "../../../selectors";
import ItemList from "../../../components/ItemList";
import { SHOPPING_LIST } from "../../../constants";

const ShoppingList = (props) => {
  return (
    <Row>
      <Col xs={1} md={6} />
      <Col xs={22} md={12}>
        <ItemList {...props} header={SHOPPING_LIST} />
      </Col>
      <Col xs={1} md={6} />
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: shoppingListSelector(state),
});

export default connect(mapStateToProps)(ShoppingList);
