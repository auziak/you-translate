import React from "react";
import NavBar from "./NavBar";
import MainSection from "./MainSection";
import VideosList from "./VideosList";
import Container from "../styling-components/Container";
import { MyContext } from "../MyContext";

class Home extends React.Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="Home">
        <header>
          <NavBar search={true} saveURL={this.props.saveURL} />
        </header>
        <Container>
          <MainSection
            buttonText={this.props.buttonText}
            mainVideo={this.props.mainVideo}
          />
          <VideosList
            displayVideo={this.props.displayVideo}
            saveVideo={this.props.saveVideo}
            videosList={this.context.videosList}
            setVideos={this.context.setVideos}
          />
        </Container>
      </div>
    );
  }
}

export default Home;
