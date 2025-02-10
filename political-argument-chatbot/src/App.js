// src/App.js
import React from 'react';

import ChatWindow from './components/ChatWindow.js';
import './App.css'; // Import global CSS styles
import bgImage from './assets/bg-image2.jpg';

function App() {
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
      
      <header className="header">
      <img src="logoEnhanced.png" alt="" className="logo" />
PoliChat
      </header>
      <main className="main-content">
        <ChatWindow />
      </main>
      <footer className="footer">
        &copy; {new Date ().getFullYear ()} PoliChat. Your political views are wrong!

      </footer>
    </div>
  );
}

export default App;
