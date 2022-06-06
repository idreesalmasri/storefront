import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import {CategoriesReducer} from './categoriesReducer';
import cartReducer from './cartReducer'
import reducerProducts from './productReducer'
// Combine reducers isn't really necessary when you only have one reducer
// But ... it's nice to create these with a name (counter in this case) so that your
// components have easy access to them.
// And ... 99.99% of all Redux apps will have more than one reducer to 'combine'
let reducers = combineReducers({ CategoriesReducer ,reducerProducts,cartReducer});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();