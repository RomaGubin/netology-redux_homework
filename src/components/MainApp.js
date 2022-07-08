import { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { CHANGE_NUMBER, SET_USER_VALUE } from "../redux/actions";
import changeNumber from "../redux/changeNumber";

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.dispatch(
      changeNumber(this.props.userValue)
    )
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <input
            type="number"
            required
            value={this.props.userValue}
            onChange={(e) => {
              this.props.dispatch({
                type: SET_USER_VALUE,
                payload: e.target.value,
              })
            }}
          />
        </div>
        <div>
          <button>Change number</button>
        </div>
        {this.props.numberValue}
      </form>
    )
  }
}

export const MainApp2 = ({ newsId }) => {
  const dispatch = useDispatch();
  const { value: numberValue, userValue } = useSelector((state) => state.number);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(changeNumber(userValue));
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="number"
          required
          value={userValue}
          onChange={(e) => {
            dispatch({
              type: SET_USER_VALUE,
              payload: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button>Change number</button>
      </div>
      {numberValue}
    </form>
  )
}

const mapStateToProps = (state, props) => {
  return {
    numberValue: state.number.value,
    userValue: state.number.userValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps,
)(MainApp);
