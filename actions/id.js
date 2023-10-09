import {ID_CHANGE} from '../constants';
export const changeId = id => {
  return {
    type: ID_CHANGE,
    payload: id,
  };
};
