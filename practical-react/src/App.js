import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import Header from "./components/Header";

class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "ImageSlider"
  };

  render() {
    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
        <div className="App">
          <ImageSlider />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Counter" });
            }}
          >
            Show Counter
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Counter") {
      return (
        <div className="App">
          <Counter />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Header" });
            }}
          >
		  Show Header
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Header") {
      return (
        <div className="App">
			<Header />
			<button
        		onClick={() => {
            		this.setState({ whichComponentToShow: "ImageSlider" });
            	}}
        	>
            	Show ImageSlider
        	</button>
		</div>
      );
    }

    return null;
  }
}

export default App;