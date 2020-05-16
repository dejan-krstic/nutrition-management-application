import { List, Typography, Popover, InputNumber } from "antd";
import { getSingleIngredientText } from "./Recipes/helpers";
import { EditOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ItemsList = (props) => {
  const renderContent = (name) =>
    props.handleAmountChange ? (
      <Popover
        placement="topRight"
        title={"Edit amount"}
        content={
          <InputNumber
            min={0}
            onChange={(value) => props.handleAmountChange(name, value)}
          />
        }
        trigger="click"
      >
        <EditOutlined style={{ fontSize: "1.5rem" }} />
      </Popover>
    ) : null;

  const sortedItems = [...props.items].sort((a, b) =>
    a.name > b.name ? 1 : -1,
  );

  return (
    <List
      style={{ width: "100%" }}
      header={<Title level={2}>{props.header}</Title>}
      bordered
      dataSource={sortedItems}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <Title level={4}>
                {getSingleIngredientText(item).charAt(0).toLocaleUpperCase() +
                  getSingleIngredientText(item).slice(1)}
              </Title>
            }
          />
          {renderContent(item.name)}
        </List.Item>
      )}
    ></List>
  );
};

export default ItemsList;
