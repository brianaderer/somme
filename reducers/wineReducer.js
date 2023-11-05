import * as Constant from '../constants';

const initialState = {
  meta: {
    owner: 1,
    location: null,
    timestamp: '',
    ID: 0,
  },
  id: {
    producer: '',
    cuvee: '',
    vintage: '',
    label: '',
  },
  visual: {
    Clarity: 0,
    Concentration: 0,
    Extract: 0,
    Tearing: 0,
    Gas: false,
    pColor: {},
    type: '',
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
    case Constant.META_CHANGE:
      return {
        ...state,
        meta: action.payload,
      };
    case Constant.RESET_STATE:
      return initialState; // Here we just return the initialState
    default:
      return state;
  }
};
export default wineReducer;
