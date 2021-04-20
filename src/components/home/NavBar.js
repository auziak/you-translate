import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ saveURL, search }) {
  const videoURL = useRef("");

  return (
    <nav>
      <div className="nav-container">
        <ul className="pages-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/library">Library</NavLink>
          </li>
          <li>
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
        </ul>
        {search ? (
          <div id="URLForm">
            <input
              type="text"
              id="videoURL"
              placeholder="Put youtube video URL here"
              ref={videoURL}
            />
            <button id="button" onClick={saveURL.bind(this, videoURL)}>
              Apply
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
