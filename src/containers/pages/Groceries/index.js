import { Col, Row } from "antd";
import { connect } from "react-redux";
import { groceriesSelector } from "../../../selectors";
import ItemList from "../../../components/ItemList";
import { GROCERIES } from "../../../constants";
import { setNewAmount } from "../../../actions";

const Groceries = (props) => {
  const handleAmountChange = (name, value) => {
    props.setNewAmount(name, value);
  };
  return (
    <Row justify="center">
      <Col xs={22} md={7}>
        <ItemList
          {...props}
          header={GROCERIES}
          handleAmountChange={handleAmountChange}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  items: groceriesSelector(state),
});

export default connect(mapStateToProps, { setNewAmount })(Groceries);
