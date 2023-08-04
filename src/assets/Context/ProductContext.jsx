import { createContext, useContext, useEffect, useReducer } from "react";
import { productsList } from "../ProductsData";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();

const initialState = {
  productsList: [],
  dalyItem: [],
  productDitals: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = () => {
    setTimeout(() => {
      dispatch({ type: "GET_PRODUCTS", payload: productsList });
    }, 100);
  };

  const getSingleProduct = (id) => {
    setTimeout(() => {
      const product = productsList.filter((curElem) => curElem.id === id);
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: product });
    }, 100);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { useProductContext, AppContext, AppProvider };
