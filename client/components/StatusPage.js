import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import WordsForm from './WordsForm';
import query from '../queries/CurrentWord';

class StatusPage extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  render() {
    const { user } = this.props.data;
    const name = user ? user.id : '';

    return (
      <div>
        <h3>
          Welcome back {name}
          <WordsForm />
          {console.log('mleko', this.props)}
        </h3>
      </div>
    );
  }
}

export default graphql(query)(StatusPage);
