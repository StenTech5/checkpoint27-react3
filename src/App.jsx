import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Jane Doe",
        bio: "A passionate developer and content creator.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer",
      },
      shows: false,
      timeInterval: 0,
    };
    this.intervalId = null;
  }

  // Lifecycle method to start the timer
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  // Cleanup interval when the component unmounts
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Toggle the display of the profile
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <h3>{Person.profession}</h3>
          </div>
        )}
        <p>Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
