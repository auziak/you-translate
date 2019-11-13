import React, { useState, useRef } from 'react';
import Vidosik from './Vidosik';

export default function VideoList({
  displayVideo,
  saveVideo,
  videosList,
  setVideos
}) {
  // const [vidosy, setVideo] = useState();
  let checked = false;
  const searchInput = useRef('');
  let results = [];
  let cc = 'any';

  console.log(videosList);

  // Function For YouTube Videos Serching
  function searchVideo(e) {
    e.preventDefault();
    // prepare the request
    let request = window.gapi.client.youtube.search.list({
      part: 'snippet',
      type: 'video',
      q: searchInput.current.value,
      maxResults: 10,
      videoCaption: cc,
      videoSyndicated: 'true',
      order: 'viewCount'
      // regionCode: 'UA'
    });

    // execute the request
    request.execute(function(response) {
      // console.log(response);
      let res = response.items;
      // console.log(res);
      res.forEach(function(item, index) {
        let idishnik = item.id.videoId;
        results.push(
          <div className="fetched-video">
            <div id="title">{item.snippet.title}</div>
            <Vidosik
              id={'vidos-' + index}
              src={'https://www.youtube.com/embed/' + item.id.videoId}
            />
            <div className="right-buttons">
              <button
                className="display"
                id={'display-' + index}
                // onClick={displayVideo.bind(this, idishnik)}
                onClick={() => displayVideo(idishnik)}
              >
                <a className="displayLink" href="#">
                  Display
                </a>
              </button>
              <button
                id={'save-' + index}
                // onClick={saveVideo.bind(this, idishnik)}
                onClick={() => saveVideo(idishnik)}
              >
                Save
              </button>
            </div>
          </div>
        );
      });
      // console.log(results);
      // setVideo(results);
      setVideos(results);
    });
  }
  return (
    <section className="videos-list">
      <form id="right-form" onSubmit={e => searchVideo(e)}>
        <input
          type="text"
          placeholder="YouTube Search"
          id="search"
          ref={searchInput}
          className="first-form-item"
        />
        <div className="second-form-item">
          <div className="subtitles">
            <label htmlFor="subtitles">CC</label>
            <input
              type="checkbox"
              name="subtitles"
              id="subtitles"
              onChange={() => {
                checked = !checked;
                if (checked === true) {
                  cc = 'closedCaption';
                } else {
                  cc = 'any';
                }
                // console.log(checked);
                // console.log(cc);
              }}
            />
          </div>
          <input type="submit" value="Search" />
        </div>
      </form>
      {/* <div id="results">{vidosy}</div> */}
      <div id="results">{videosList}</div>
    </section>
  );
}
