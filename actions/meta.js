import {META_CHANGE} from '../constants';
export const changeMeta = meta => {
  return {
    type: META_CHANGE,
    payload: meta,
  };
};
