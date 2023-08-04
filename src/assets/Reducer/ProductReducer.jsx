const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      const dailyProducts = action.payload.filter(
        (curElem) => curElem.dailyProduct === true
      );
      return {
        ...state,
        productsList: action.payload,
        dalyItem: dailyProducts,
      };

    case "GET_SINGLE_PRODUCT":
      return {
        ...state,
        productDitals: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
