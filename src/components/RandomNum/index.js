import { Component } from "react";
import "./index.css";

class RandomNum extends Component {
  state = {
    count: 0,
  };

  numGenerate = () => {
    this.setState({ count: Math.ceil(Math.random() * 100) });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="content">
            Generate a random number in the range 0 to 100{" "}
          </p>
          <button type="button" className="button" onClick={this.numGenerate}>
            Generat
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    );
  }
}
export default RandomNum;
