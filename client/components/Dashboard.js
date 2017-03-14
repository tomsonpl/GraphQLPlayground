import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import ImageCard from './ImageCard';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  render() {
    const { user } = this.props.data;

    return (
      <div>
        <h3>
          hello {user ? user.name : 'mleko'}
        </h3>
        <div className="row">
          <ImageCard
            cardTitle="Translator"
            content="Translate a term from one language to another"
            cardStyle={{ background: '#0088cc', height: '200px', width: '100%' }}
            linkDescription="Translator"
            linkTo={'/translator'}
          />
          <ImageCard
            cardTitle="Dictionary"
            content="Find out a meaning of a word"
            cardStyle={{ background: '#e36159', height: '200px', width: '100%' }}
            linkDescription="Dictionary"
            linkTo={'/dictionary'}
          />
          <ImageCard
            cardTitle="Words list"
            content="Check the lists of words to improve your vocabulary"
            cardStyle={{ background: '#2baab1', height: '200px', width: '100%' }}
            linkDescription="Words List"
            linkTo={'/wordslist'}
          />
          <ImageCard
            cardTitle="Notebook"
            cardStyle={{ background: '#383f48', height: '200px', width: '100%' }}
            content="This is the place where you can add your private words with definitions"
            linkDescription="Your Notebook"
            linkTo={'/notebook'}
          />
        </div>
      </div>
    );
  }
}

export default graphql(query)(Dashboard);
