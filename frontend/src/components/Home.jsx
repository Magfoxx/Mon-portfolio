import React from 'react';

import '../assets/styles/components/_home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='home_left'>
        <div className='home_gradient'></div>
        <h1>Développeur web junior</h1>
        <p>Bienvenue sur mon portfolio</p>
      </div>
      <div className='home_right'>
        <div className='home_gradient right'></div>
      </div>
    </div>
  );
};

export default Home;