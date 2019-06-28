import React from 'react';
import './App.css';
import Post from './components/Post'
import Postform from './components/Postform'

function App() {
  return (
    <div className="App">
        <Postform />
        <Post />
    </div>
  );
}

export default App;
