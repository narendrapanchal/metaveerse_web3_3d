import React, { useState } from 'react';
import './App.css';
import FightingAvatar from './components/FightingAvatar';
import ThreeAnimation from './components/ThreeAnimation';
import * as THREE from 'three';
function App() {




  return (
    <div className="App">
      <FightingAvatar/>
    <ThreeAnimation />
  </div>
  );
}

export default App;
