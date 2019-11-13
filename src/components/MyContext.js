import React from 'react';

export const MyContext = React.createContext();

export default class MyContextProvider extends React.Component {
  state = {
    videosList: null
  };

  setVideos = videos => {
    this.setState({ videosList: videos });
  };

  render() {
    return (
      <MyContext.Provider value={{ ...this.state, setVideos: this.setVideos }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
