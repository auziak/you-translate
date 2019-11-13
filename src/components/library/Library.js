import React from 'react';
import NavBar from '../home/NavBar';
import Container from '../styling-components/Container';
import { NavLink } from 'react-router-dom';

class Library extends React.Component {
  render() {
    return (
      <div>
        <NavBar search={false} />
        <h1 className="watch-later">Watch Later</h1>
        <hr />

        <Container>
          {this.props.watchLater.map(vidos => (
            <div className="watch-later-vidos">
              <iframe src={vidos}></iframe>
              <div>
                <NavLink to="/">
                  <button onClick={this.props.watchVideo.bind(this, vidos)}>
                    Watch
                  </button>
                </NavLink>
                <button onClick={this.props.deleteVideo.bind(this, vidos)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}
export default Library;
