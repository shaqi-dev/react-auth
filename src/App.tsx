import React from 'react';
import MainLayout from './components/MainLayout';
import './App.css';

const App = () => (
  <div className="App">
    <MainLayout>
      <form>
        <input type="text" />
      </form>
    </MainLayout>
  </div>
);

export default App;
