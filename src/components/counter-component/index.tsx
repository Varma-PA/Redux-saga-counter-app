import React from "react";
import { connect } from "react-redux";
import * as types from "../../redux/types";

// interface propType {
//   count: number;
//   increment: Function;
//   decrement: Function;
// }

export const Counter = ({ count, increment, decrement }: any) => {
  return (
    <div className="center">
      <div className="counterDiv">
        <h2>Counter Application</h2>
        <div className="actualCounter">
          <button className="btn btn-primary" onClick={increment}>
            +
          </button>
          <span className="theCountStyle">{count}</span>
          <button className="btn btn-primary" onClick={decrement}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  ...state.counter,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: types.COUNTER_UP }),
    decrement: () => dispatch({ type: types.COUNTER_DOWN }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
