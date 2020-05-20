import "jsdom-global/register";
import React from "react";
import { shallow } from "enzyme";
import { MyRecipes } from "../containers/pages/MyRecipes";
import { Empty, Spin } from "antd";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

jest.mock("../actions", () => ({
  choseMealOnDate: jest.fn(),
  getRecipes: jest.fn(),
  getMeals: jest.fn(),
  getGroceries: jest.fn(),
  addNewRecipe: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

beforeEach(() => {
  jest.resetAllMocks();
});

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    value: jest.fn(() => {
      return {
        matches: true,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      };
    }),
  });
});

describe("MyRecipes", () => {
  const defaultProps = {
    recipes: [],
    isLoadingRecipes: 0,
    recipesLoaded: false,
    deleteRecipe: jest.fn(),
    getRecipes: jest.fn(),
  };

  it("should match snapshot with Empty page", () => {
    const wrapper = shallow(<MyRecipes {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with loader active", () => {
    const props = { ...defaultProps, isLoadingRecipes: 1 };
    const wrapper = shallow(<MyRecipes {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with recipes present", () => {
    const props = { ...defaultProps, isLoadingRecipes: 0, recipes: [{}] };
    const wrapper = shallow(<MyRecipes {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should load Empty when there are no recipes", () => {
    const wrapper = shallow(<MyRecipes {...defaultProps} />);
    const empty = wrapper.find(Empty);

    expect(empty).toHaveLength(1);
  });

  it("should not load Empty when there are recipes or they are loading", () => {
    const props = { ...defaultProps, isLoadingRecipes: 1, recipes: [1] };
    const wrapper = shallow(<MyRecipes {...props} />);
    const empty = wrapper.find(Empty);

    expect(empty).toHaveLength(0);
  });

  it("should find ConfirmDeleteModal and delete recipe with selected id", () => {
    const wrapper = shallow(<MyRecipes {...defaultProps} />);
    const recipeId = 5;

    const cdm = wrapper.find(ConfirmDeleteModal);
    cdm.simulate("ok", recipeId);

    expect(defaultProps.deleteRecipe).toHaveBeenCalledWith(recipeId);
  });

  it("should load spinner while recipes are loading", () => {
    const props = { ...defaultProps, isLoadingRecipes: 1 };
    const wrapper = shallow(<MyRecipes {...props} />);

    const spin = wrapper.find(Spin);
    expect(spin).toHaveLength(1);
  });

  it("shouldn't render spinner when recipes are not loaded", () => {
    const wrapper = shallow(<MyRecipes {...defaultProps} />);

    const spin = wrapper.find(Spin);
    expect(spin).toHaveLength(0);
  });
});
