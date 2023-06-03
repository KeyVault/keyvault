import './App.css';
import React from 'react';

import HelloWorld from './components/HelloWorld'
import List from './components/list'
import Layout from './components/layout/layout';

const avengers = [
  { name: 'Captain America' },
  { name: 'Iron Man' },
  { name: 'Black Widow' },
  { name: 'Thor' },
  { name: 'Hawkeye' },
  { name: 'Vision' },
  { name: 'Hulk' },
]

const App = () => {
  return (
    <Layout>
      <HelloWorld />
      <List data={avengers} />
    </Layout>
  );
}

export default App;
