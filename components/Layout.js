import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';
import ContactUsQuickLink from './Common/ContactUsQuickLink';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <ContactUsQuickLink />
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
