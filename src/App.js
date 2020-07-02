import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';



function App() {
  return (
    <div>
      <div id={'header'} className={'reveal' + ' ' + 'alt'}><Header /></div>
      <div id={'main'}><Main /></div>
      <div id={'footer'}><Footer /></div>
    </div>
  );
}

export default App;
