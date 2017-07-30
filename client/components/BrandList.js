import React, { Component } from "react";
import { graphql } from "react-apollo";

import Brand from './Brand';
import query from '../queries/fetchBrands';

class BrandList extends Component {
  renderBrands() {
    const { loading, brands } = this.props.data;
    if (loading) {
      return null;
    }
    return brands.map((brand) =>
      <li key={brand.id}>
        <Brand {...brand} />
      </li>
    );
  }

  render() {
    return (
      <section className="section" id="brand-list">
        <div className="container">
          <ul>
            {this.renderBrands()}
          </ul>
        </div>
      </section>
    );
  }
}

export default graphql(query)(BrandList);
