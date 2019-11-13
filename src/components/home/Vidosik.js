import React from 'react';

export default function Vidosik({ id, src }) {
  return (
    <div className="vidosiky">
      <iframe className="vidos" id={id} src={src} allowFullScreen></iframe>
    </div>
  );
}
