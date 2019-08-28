import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footbar from './components/Footbar';
import dummyText from './dummyText';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Section
        title='Section 1'
        subtitle={dummyText}
        dark={true}
        id='Section1'
      />
      <Section
        title='Section 2'
        subtitle={dummyText}
        dark={false}
        id='Section2'
      />
      <Section
        title='Section 3'
        subtitle={dummyText}
        dark={true}
        id='Section3'
      />
      <Footbar />
    </div>
  );
};

export default App;
