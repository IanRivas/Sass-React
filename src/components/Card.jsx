import React from 'react';

import '../assets/styles/Card.scss';

function Card({ src, name, title, text, classCss }) {
  return (
    <div className={classCss}>
      <div>
        <img src={src} alt="foto" />
        <div className="spanBox">
          <span>{name}</span>
          <span>Verified Graduate</span>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Card;
