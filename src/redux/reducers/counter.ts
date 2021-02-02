import * as types from "../types";

interface counterModel {
  count: number;
}

const initialState: counterModel = {
  count: 0,
};

interface actionType {
  type: string;
  payload?: any;
}

export default function counter(state = initialState, action: actionType) {
  switch (action.type) {
    // case types.COUNTER_UP:
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };

    case types.COUNTER_DOWN:
      return {
        ...state,
        count: state.count - 1,
      };

    case types.COUNTER_UP_ASYNC:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
}
