import * as types from "../types";

const initialState = {
  test: "Hello World",
};

interface actionType {
  type: string;
  payload?: any;
}

export default function test(state = initialState, action: actionType) {
  switch (action.type) {
    case types.TEST_THE_REDUX:
      console.log("Inside Reducer");
      return {
        ...state,
        message: "This is inside the test case",
      };

    default:
      return state;
  }
}
