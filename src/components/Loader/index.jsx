import { Component } from "react";
import { Audio } from "react-loader-spinner";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
}
