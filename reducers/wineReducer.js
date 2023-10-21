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
    Clarity: {
      value: 0,
      lookup: {
        0: 'N/A',
        1: 'Clear',
        2: 'Hazy',
        3: 'Turbid',
      },
    },
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
