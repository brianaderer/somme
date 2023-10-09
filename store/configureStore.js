import {createStore, combineReducers} from 'redux';
import wineReducer from '../reducers/wineReducer';
const rootReducer = combineReducers({count: wineReducer});
const initialState = 0;
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
