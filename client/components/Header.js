import React from 'react';
import CreateBrand from './CreateBrand';
import GoBrands from './GoBrands';

const Header = () => (
  <section className="hero is-info is-fullheight">
    <header className="hero-head" style={{
        width: '100%',
        boxShadow: '0 1px 0 rgba(219, 219, 219, 0.3)',
      }}>
      <nav
        className="navbar is-transparent"
        style={{
          backgroundColor: 'transparent'
        }}>
        <div
          className="navbar-brand"
          style={{ margin: 'auto' }}
        >
          <a
            className="navbar-item"
            href="/">
            <h1 className="title">Brand.me</h1>
          </a>
        </div>
      </nav>
    </header>
    <div className="hero-body">
      <div className="container">
        <CreateBrand />
      </div>
    </div>
    <div className="hero-foot">
      <GoBrands />
    </div>
  </section>
);

export default Header;
