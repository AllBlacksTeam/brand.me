import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import query from '../queries/fetchBrands';
import mutation from '../mutations/CreateBrand';

class CreateBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    console.log('submit')
    this.props.mutate({
      variables: {
        name: this.state.name,
      },
      refetchQueries: [{ query }],
    }).then(() => this.setState({ name: '' }));
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className="columns">
        <div className="column is-8 is-offset-2">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                type="text"
                className="input is-medium"
                placeholder="Enter an awesome brand name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="control">
              <button
                type="submit"
                className="is-medium button is-primary">
                  Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default graphql(mutation)(CreateBrand);
