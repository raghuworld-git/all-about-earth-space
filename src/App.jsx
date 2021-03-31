import React from 'react';
import HeaderNav from './components/navigation';
import SpecialInfo from './components/specialInfo';
import Routing from './router/Routing';

const App = () => {
  return (
    <>
      <HeaderNav/>
      <SpecialInfo/>
      <Routing/>
    </>
  );
}

export default App;
