import React, { Component } from 'react';
import './HomePage.css';
import HomeIntro from './HomeIntro';
import Pages from './Cards';

const HomePage = () => {
  return (
    <div>
      <HomeIntro />
      <Pages />
    </div>
  );
}

export default HomePage;
