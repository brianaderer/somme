import * as Constant from '../constants';

const initialState = {
  count: 0,
  id: {
    producer: '',
    cuvee: '',
    vintage: '',
    label: '',
  },
};
const wineReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    case Constant.ID_CHANGE:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
export default wineReducer;
