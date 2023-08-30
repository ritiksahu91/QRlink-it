// App.js
import React from 'react';
import './App.css'; // You can add more global styles here
import NavigationBar from './Components/NavigationBar';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <h1 className='main'>Welcome to our website!</h1>
      {/* Other content */}
    </div>
  );
};

export default App;
