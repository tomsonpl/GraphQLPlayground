import React from 'react';
import Header from './Header';
import EntryPage from './EntryPage';

const App = (props) => {

  return (
    <div className="container">
      <Header />
      {console.log(props)}
      { props.location.pathname !== '/'
      ? props.children
      : <EntryPage src={require('../images/111.jpg')} />}
    </div>
  );
};

export default App;
