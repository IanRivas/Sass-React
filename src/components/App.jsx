import React from 'react';
import Card from './Card.jsx';

import '../assets/styles/App.scss';
import { datos } from '../data';

function App() {
  return (
    <div className="Main">
      <div className="Container">
        {datos.map((dato, i) => (
          <Card {...dato} />
        ))}
      </div>
    </div>
  );
}

export default App;
