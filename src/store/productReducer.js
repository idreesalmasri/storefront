export const initialState = {
    products: [
      
      {
        id:1,
        category: "Food",
        name: "mansaf",
        price: 50,
        quantity: 10,
        description: "meal for 5 persons",
        image: "https://www.cheftariq.com/wp-content/uploads/2020/04/mansaf-4-1.jpg.webp",
      },
      {
        id:2,
        category: "Food",
        name: "shawerma",
        price: 3,
        quantity: 10,
        description: "meal for one person ",
        image: "https://ckreci.com/wp-content/uploads/2020/03/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7-%D8%A7%D9%84%D9%81%D8%B1%D8%A7%D8%AE-2.jpg",
      },
      {
        category: "Electronics",
        name: "laptop",
        price: 500,
        quantity: 10,
        description: "ram:16gb ,storage :ssd 500GB ",
        image: "https://eunw.eu/wp-content/uploads/2022/05/samsung-galaxy-book-2-pro-360-01-750x430.jpg",
      },
      {
        category: "Electronics",
        name: "i phone 13",
        price: 1000,
        quantity: 10,
        description: "rqm:6gb ,storage:128gb",
        image: "https://www.reuters.com/resizer/Yu-lAhP9c9_7ilGSig2BNsXwtYw=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MWG2II5FBJOWZJMS2ZJRD3QFCI.jpg",
      },
    ],
    selectedPrpducts:[]
  };
  
  export default function reducerProducts(state = initialState, action) {
    let { type,payload } = action;
    let selectedProduct=[];
    switch (type) {
        case "PRODUCT_SELECTED":

             selectedProduct = state.products.filter(
              (product) => product.category === payload
            );
            return {
            ...state,
              selectedPrpducts: selectedProduct,
            };
          default:
            return state;
        }
  }
  
  export const selectedProducts = (name) => {
    return {
        type: "PRODUCT_SELECTED",
        payload: name,
    };
  };