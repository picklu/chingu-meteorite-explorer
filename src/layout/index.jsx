import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = props => (
  <>
    <Header />
    {props.children}
    <p>The color prop is {props.color}</p>
    <Footer />
  </>
);

export default Layout;
