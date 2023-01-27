import { useState } from 'react';
import './App.css';
import MainCard from './components/MainCard/index'


function App() {

  return (
    <div className="app-main-container">
      <section className="app-main-section">
        <MainCard />
      </section>
    </div>
  );
}

export default App;
