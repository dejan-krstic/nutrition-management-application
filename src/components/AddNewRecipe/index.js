import {
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Slider,
  Select,
  Row,
  Col,
} from "antd";
import {
  RECIPE_PROPERTY,
  RECIPE_SECTION,
  RECIPE_CATEGORY,
  MEASUREMENT_UNIT,
  REQUEST_METHOD,
  NAVIGATION_LINKS,
} from "../../constants";
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_URL,
  layout,
  validateMessages,
} from "./constants";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { fetchFromServer } from "../../hooks/fetchFromServer";
import { useCallback, useState } from "react";
import PictureWall from "./PictureWall";
import "./index.scss";
import { mapImageResponseData, createImageData } from "./helpers";
import { useEffect } from "react";
import navigationHook from "../../hooks/navigation";

const { Option } = Select;

const AddNewRecipe = (props) => {
  const { sendRequest, isLoading } = fetchFromServer();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [form] = Form.useForm();
  const { historyPush } = navigationHook();

  const handleImageUpload = useCallback(
    async (input) => {
      if (input && input.file && input.file.originFileObj && !isLoading) {
        const formData = new FormData();
        formData.append("file", input.file.originFileObj);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        try {
          const response = await sendRequest(
            CLOUDINARY_URL,
            REQUEST_METHOD.POST,
            formData,
            null,
          );
          const image = mapImageResponseData(response);
          setUploadedImages((uploadedImages) => [...uploadedImages, image]);
        } catch (error) {
          console.error(error);
        }
      }
    },
    [sendRequest, isLoading, uploadedImages],
  );

  const onFinish = (values) => {
    const recipe = {
      ...values,
      [RECIPE_PROPERTY.NUMBER_OF_SERVINGS]:
        values[RECIPE_PROPERTY.NUMBER_OF_SERVINGS] || 4,
      [RECIPE_PROPERTY.IMAGES]: [...uploadedImages.map((image) => image.url)],
    };
    if (props.recipe) {
      recipe[RECIPE_PROPERTY.ID] = props.recipe[RECIPE_PROPERTY.ID];
    }
    props.onAddNewRecipe(recipe);
    form.resetFields();
    setUploadedImages([]);
    historyPush(NAVIGATION_LINKS.myRecipes.path);
  };

  useEffect(() => {
    if (props.recipe) {
      setUploadedImages(() => [...props.recipe.images.map(createImageData)]);
      form.setFields([
        {
          name: RECIPE_PROPERTY.CATEGORY,
          value: props.recipe[RECIPE_PROPERTY.CATEGORY],
        },
        {
          name: RECIPE_PROPERTY.DESCRIPTION,
          value: props.recipe[RECIPE_PROPERTY.DESCRIPTION],
        },
        {
          name: RECIPE_PROPERTY.INSTRUCTIONS,
          value: props.recipe[RECIPE_PROPERTY.INSTRUCTIONS],
        },
        {
          name: RECIPE_PROPERTY.INGREDIENTS,
          value: props.recipe[RECIPE_PROPERTY.INGREDIENTS],
        },
        {
          name: RECIPE_PROPERTY.NUMBER_OF_SERVINGS,
          value: props.recipe[RECIPE_PROPERTY.NUMBER_OF_SERVINGS],
        },
        {
          name: RECIPE_PROPERTY.READY_IN_MINUTES,
          value: props.recipe[RECIPE_PROPERTY.READY_IN_MINUTES],
        },
        {
          name: RECIPE_PROPERTY.TITLE,
          value: props.recipe[RECIPE_PROPERTY.TITLE],
        },
      ]);
    }
  }, [props.recipe]);

  const handleRemoveImage = useCallback(
    (image) => {
      setUploadedImages(() =>
        uploadedImages.filter(({ uid }) => uid !== image.uid),
      );
    },
    [uploadedImages, setUploadedImages],
  );
  return (
    <div className="add-new-recipe-container">
      <Form
        {...layout}
        size="medium"
        form={form}
        name="add-new-recipe"
        onFinish={onFinish}
        validateMessages={validateMessages}
        hideRequiredMark
      >
        <Form.Item
          name={RECIPE_PROPERTY.TITLE}
          label={RECIPE_SECTION.TITLE}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={RECIPE_PROPERTY.CATEGORY}
          label={RECIPE_SECTION.CATEGORY}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value={RECIPE_CATEGORY.BREAKFAST}>
              {RECIPE_CATEGORY.BREAKFAST}
            </Radio.Button>
            <Radio.Button value={RECIPE_CATEGORY.LUNCH}>
              {RECIPE_CATEGORY.LUNCH}
            </Radio.Button>
            <Radio.Button value={RECIPE_CATEGORY.DINNER}>
              {RECIPE_CATEGORY.DINNER}
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name={RECIPE_PROPERTY.DESCRIPTION}
          label={RECIPE_SECTION.DESCRIPTION}
        >
          <Input.TextArea autoSize={{ minRows: 4, maxRows: 10 }} />
        </Form.Item>

        <Form.Item
          style={{ paddingTop: "0.5rem", marginBottom: "1rem" }}
          name={RECIPE_PROPERTY.NUMBER_OF_SERVINGS}
          label={RECIPE_SECTION.NUMBER_OF_SERVINGS}
        >
          <Slider
            style={{ paddingTop: "0.5rem" }}
            min={1}
            max={7}
            tooltipVisible
            defaultValue={6}
            marks={{
              2: "Two",
              4: "Four",
              6: "Six",
            }}
          />
        </Form.Item>

        <Form.Item
          name={RECIPE_PROPERTY.READY_IN_MINUTES}
          label={RECIPE_SECTION.READY_IN_MINUTES}
          rules={[
            {
              type: "number",
              min: 1,
              max: 999,
            },
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={1} max={999} />
        </Form.Item>
        <Form.Item
          name={RECIPE_PROPERTY.INGREDIENTS}
          label={RECIPE_SECTION.INGREDIENTS}
          style={{ textAlign: "center" }}
        >
          <Form.List
            name={RECIPE_PROPERTY.INGREDIENTS}
            label={RECIPE_SECTION.INGREDIENTS}
          >
            {(fields, { add, remove }) => {
              return (
                <div>
                  {fields.map((field, index) => (
                    <Form.Item key={field.key}>
                      <Row>
                        <Col xs={13}>
                          <Form.Item
                            name={[index, "name"]}
                            validateTrigger={["onChange", "onBlur"]}
                            rules={[
                              {
                                required: true,
                                message:
                                  "Please input ingredient's name or delete this field.",
                              },
                            ]}
                            noStyle
                          >
                            <Input placeholder="Ingredient's name" />
                          </Form.Item>
                        </Col>
                        <Col xs={4}>
                          <Form.Item
                            name={[index, "amount"]}
                            rules={[
                              {
                                required: true,
                                message: "Please input amount",
                              },
                            ]}
                            noStyle
                            style={{ textAlign: "center" }}
                          >
                            <InputNumber
                              style={{ margin: "auto" }}
                              placeholder="amount"
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={5}>
                          <Form.Item
                            name={[index, "unit"]}
                            rules={[
                              {
                                required: true,
                                message: "Please input ingredient's unit",
                              },
                            ]}
                            noStyle
                          >
                            <Select placeholder="unit">
                              <Option value={MEASUREMENT_UNIT.G}>
                                {MEASUREMENT_UNIT.G}
                              </Option>
                              <Option value={MEASUREMENT_UNIT.KG}>
                                {MEASUREMENT_UNIT.KG}
                              </Option>
                              <Option value={MEASUREMENT_UNIT.L}>
                                {MEASUREMENT_UNIT.L}
                              </Option>
                              <Option value={MEASUREMENT_UNIT.PIECE}>
                                {MEASUREMENT_UNIT.PIECE}/s
                              </Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col xs={1}>
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            style={{ marginLeft: "0.5rem" }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Col>
                      </Row>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => {
                        add();
                      }}
                      style={{ width: "100%" }}
                    >
                      <PlusOutlined /> Add field
                    </Button>
                  </Form.Item>
                </div>
              );
            }}
          </Form.List>
        </Form.Item>

        <Form.Item
          name={RECIPE_PROPERTY.INSTRUCTIONS}
          label={RECIPE_SECTION.INSTRUCTIONS}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 4, maxRows: 12 }} />
        </Form.Item>
        <Form.Item label={RECIPE_SECTION.IMAGES}>
          <PictureWall
            onChange={handleImageUpload}
            fileList={uploadedImages}
            handleRemoveImage={handleRemoveImage}
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Row id="row-button-container">
            <Col
              id="form-button-container"
              lg={{ offset: 8 }}
              xl={{ offset: 12 }}
              xxl={{ offset: 24 }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNewRecipe;
