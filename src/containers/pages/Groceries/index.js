import { Col, Row } from "antd";
import { connect } from "react-redux";
import { groceriesSelector } from "../../../selectors";
import ItemList from "../../../components/ItemList";
import { GROCERIES } from "../../../constants";

const Groceries = (props) => {
  return (
    <Row>
      <Col xs={1} md={6} />
      <Col xs={22} md={12}>
        <ItemList {...props} header={GROCERIES} />
      </Col>
      <Col xs={1} md={6} />
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: groceriesSelector(state),
});

export default connect(mapStateToProps)(Groceries);
