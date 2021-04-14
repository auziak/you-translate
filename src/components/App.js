import React from "react";
import "../App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import Library from "./library/Library";
import Error from "./error";
import MyContextProvider from "./MyContext";

const { REACT_APP_YOUTUBE_API_KEY: API_KEY } = process.env;

class App extends React.Component {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
  }

  state = {
    mainVideo: "https://www.youtube.com/embed/7Cykzsi38hA",
    watchLater: [],
    buttonText: "Translate to",
  };
  handleResize() {
    const { innerWidth: width } = window;
    if (width <= 768 && this.state.buttonText === "Translate to") {
      this.setState({
        buttonText: "Lang",
      });
    } else if (width > 768 && this.state.buttonText === "Lang") {
      this.setState({
        buttonText: "Translate to",
      });
    }
  }

  // Load YouTube API
  loadYoutubeApi() {
    // creating script tag
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          // Gapi Is Ready to use
        });
      });
    };
    // appending script tag to body
    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadYoutubeApi();
    window.addEventListener("resize", this.handleResize);
    return () => window.removeEventListener("resize", this.handleResize);
  }
  displayVideo = (idishnik) => {
    this.setState({ mainVideo: "https://www.youtube.com/embed/" + idishnik });
  };
  watchVideo = (url) => {
    this.setState({ mainVideo: url });
  };
  saveURL = (videoURL) => {
    console.log(videoURL.current.value.replace("watch?v=", "embed/"));
    let youtubeURL = videoURL.current.value.replace("watch?v=", "embed/");
    this.setState({ mainVideo: youtubeURL });
    videoURL.current.value = "";
  };
  saveVideo = (idishnik) => {
    this.setState({
      watchLater: [
        ...this.state.watchLater,
        "https://www.youtube.com/embed/" + idishnik,
      ],
    });
  };
  deleteVideo = (vidos) => {
    const newArr = this.state.watchLater.filter((val) => {
      return val !== vidos;
    });
    this.setState({
      watchLater: newArr,
    });
  };

  render() {
    return (
      <MyContextProvider>
        <HashRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  saveURL={this.saveURL}
                  mainVideo={this.state.mainVideo}
                  displayVideo={this.displayVideo}
                  saveVideo={this.saveVideo}
                  buttonText={this.state.buttonText}
                />
              )}
            />
            <Route
              path="/library"
              render={() => (
                <Library
                  watchVideo={this.watchVideo}
                  deleteVideo={this.deleteVideo}
                  watchLater={this.state.watchLater}
                />
              )}
            />
            <Route component={Error} />
          </Switch>
        </HashRouter>
      </MyContextProvider>
    );
  }
}

export default App;
