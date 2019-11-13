import React, { useRef, useState } from 'react';

export default function MainSection({ mainVideo, buttonText }) {
  const [state, setState] = useState({ translated: '' });

  const textInput = useRef();

  // Text Translate Function
  const loadText = x => {
    // define language
    let lang = x;
    // geting text from input
    let toTranslate = textInput.current.value;
    // console.log(toTranslate);
    // sending request to google translate & returning value in input
    fetch(
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=' +
        lang +
        '&dt=t&q=' +
        toTranslate
    )
      .then(res => res.json())
      .then(text => setState({ translated: text[0][0][0] }))
      .catch(err => {
        return 'Not Found ' + err;
      });
  };

  // Binding Translation Function to "Enter" Key
  const hitEnter = e => {
    if (e.keyCode === 13) {
      loadText('uk');
    }
  };

  return (
    <section className="main">
      <div className="iframe-container">
        <iframe
          width="100%"
          height="56%"
          id="videoContainer"
          src={mainVideo}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div id="translater">
        <textarea
          id="translationInput"
          ref={textInput}
          onKeyDown={e => hitEnter(e)}
        ></textarea>
        <div id="buttons">
          <button id="rus-uk" onClick={() => loadText('uk')}>
            {buttonText} <span className="flag-icon flag-icon-ua"></span>
          </button>
          <button id="moskovien" onClick={() => loadText('ru')}>
            {buttonText} <span className="flag-icon flag-icon-ru"></span>
          </button>
        </div>
        <textarea id="translated" value={state.translated}></textarea>
      </div>
    </section>
  );
}
