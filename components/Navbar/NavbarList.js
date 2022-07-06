import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NavbarList = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a className="block p-2 mt-6 w-max font-mulish-semibold xl:px-10">
        {children}
      </a>
    </Link>
  </li>
);

NavbarList.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavbarList;
