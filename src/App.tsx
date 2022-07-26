import React from 'react';
import s from 'styled-components';
import './App.css';

const Logo = s.h1`
  margin-top: 40px;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 7.8rem;
`;

const App = () => (
  <div className="App">
    <Logo>ONLY.</Logo>
  </div>
);

export default App;
