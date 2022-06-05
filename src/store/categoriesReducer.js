let initialstate = {
  CategoriesList: [
    {
      id: 1,
      normalizedName: "Food",
      description: "here you will find the available meals",
    },
    {
      id: 2,
      normalizedName: "Electronics",
      description: "here you will find the available devices",
    },
  ],
  activeCategory: "",
};

export const CategoriesReducer = (state = initialstate, action) => {
  let { type, payload } = action;
  switch (type) {
    case "activeCategory":
      return {
        ...state,
        activeCategory: payload,
      };
    default:
      return state;
  }
};

export const activeCategory = (name) => {
  return {
    type: "activeCategory",
    payload: name,
  };
};
