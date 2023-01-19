import logo from './logo.svg';
import './App.css';
import FirstComponent from './componanse/FirstComponent';
import SecondComponent from './componanse/SecondComponent';
import NamedComponent from './componanse/NamedComponent';
import UserName from './componanse/Tweet';
import { useState } from 'react';
import Counter from './componanse/Counter';
import TempConverter from './componanse/TempConverter';

function App() {
  return (
    <TempConverter />
  );
}

export default App;
