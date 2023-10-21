import {VISUAL_CHANGE} from '../constants';
export const changeVisual = visual => {
  return {
    type: VISUAL_CHANGE,
    payload: visual,
  };
};
