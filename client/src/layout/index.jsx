import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

export default Layout;
