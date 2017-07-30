import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import mutation from '../mutations/DislikeBrand';

class DislikeButton extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    dislikes: PropTypes.number.isRequired,
    mutate: PropTypes.func.isRequired,
  }
  onClick() {
    const { id, dislikes } = this.props;
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        dislikeBrand: {
          __typename: 'BrandType',
          id: id,
          dislikes: dislikes + 1,
        },
      },
    });
  }
  render () {
    return (
      <a
        className="dislike card-footer-item"
        onClick={() => this.onClick()}>
        <span className="icon">
          <i className="fa fa-thumbs-o-down"></i>
        </span>
      </a>
    )
  }
}

export default graphql(mutation)(DislikeButton);
