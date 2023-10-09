import {createStore, combineReducers} from 'redux';
import wineReducer from '../reducers/wineReducer';
const rootReducer = combineReducers({state: wineReducer});
const initialState = {count: 0, id: {}};
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
