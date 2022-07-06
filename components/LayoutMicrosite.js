import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navbar from './Navbar';
import ContactUsQuickLink from './Common/ContactUsQuickLink';

const LayoutMicrosite = ({ children }) => (
  <>
    <Navbar microsite />
    {children}
    <ContactUsQuickLink />
    <Footer />
  </>
);

LayoutMicrosite.propTypes = {
  children: PropTypes.string.isRequired,
};

export default LayoutMicrosite;
