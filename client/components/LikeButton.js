import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import mutation from '../mutations/LikeBrand';

class LikeButton extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    mutate: PropTypes.func.isRequired,
  }
  onClick() {
    const { id, likes } = this.props;
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeBrand: {
          __typename: 'BrandType',
          id: id,
          likes: likes + 1,
        },
      },
    });
  }
  render () {
    return (
      <a
        className="like card-footer-item"
        onClick={() => this.onClick()}
      >
        <span className="icon">
          <i className="fa fa-thumbs-o-up"></i>
        </span>
      </a>
    )
  }
}

export default graphql(mutation)(LikeButton);
