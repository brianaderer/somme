import * as Constant from '../constants';

const initialState = {
  count: 0,
  id: {
    producer: '',
    cuvee: '',
    vintage: '',
    label: '',
  },
  visual: {
    foo: '',
  },
};
const wineReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constant.VISUAL_CHANGE:
      return {
        ...state,
        visual: action.payload,
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
