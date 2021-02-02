import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as types from "../../redux/types";

export const Test = ({ theTest, test, message }: any) => {
  useEffect(() => {
    theTest();
  }, [theTest]);

  return (
    <div>
      <h2>This is testing of the redux component</h2>
      {message && <div>{message}</div>}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  ...state.test,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    theTest: () => dispatch({ type: types.TEST_THE_REDUX }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
