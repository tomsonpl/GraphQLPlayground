import React, { Component } from 'react';

class WordsForm extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '', description: '', group: '' };
  }

  onSubmit = (event) => {
    const { term, description, group } = this.state;

    event.preventDefault();

    this.props.onSubmit({ term, description, group });
  }

  render() {
    return (
      <div className="row">
        <form
          onSubmit={this.onSubmit}
          className="col s6"
        >
          <div className="input-field">
            <input
              placeholder="Term"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Description"
              value={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Set"
              value={this.state.group}
              onChange={e => this.setState({ group: e.target.value })}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default WordsForm;
