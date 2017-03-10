import React from 'react';
import Header from './Header';
import StatusPage from './StatusPage';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  )
}

export default App;