import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const Button = ({ children, href, big }) => (
  <Link href={href} passHref>
    <button
      type="submit"
      className={`flex flex-row items-center ${
        big ? 'mb-12 px-12 lg:text-2xl' : 'text-base px-6 py-2'
      } text-lg text-white transition-colors rounded-lg font-mulish focus:shadow-outline hover:bg-green-600 bg-secondary whitespace-nowrap`}
    >
      {children}
      <ArrowNarrowRightIcon
        className={`items-center ${big ? 'w-6 h-16' : 'w-4 h-8'} ml-2`}
        aria-hidden="true"
      />
    </button>
  </Link>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  big: PropTypes.bool,
};

Button.defaultProps = {
  big: false,
};

export default Button;
