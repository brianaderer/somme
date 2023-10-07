import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer';
const rootReducer = combineReducers({count: countReducer});
const initialState = 0;
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
