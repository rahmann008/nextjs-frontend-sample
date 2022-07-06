import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';

const MenuButton = ({ title, value }) => (
  <Menu.Button className="flex flex-row px-2 py-3 mb-6 mr-6 border rounded w-44 lg:w-60 sm:px-3 sm:py-4 place-content-between border-slate-900 font-mulish">
    <span>
      {title}
      <span className="font-mulish-bold"> {value}</span>
    </span>
    <ChevronDownIcon
      className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
      aria-hidden="true"
    />
  </Menu.Button>
);

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.func.isRequired,
};

export default MenuButton;
