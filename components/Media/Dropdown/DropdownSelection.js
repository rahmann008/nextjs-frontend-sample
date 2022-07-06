import React from 'react';
import { Menu } from '@headlessui/react';
import PropTypes from 'prop-types';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const DropdownSelection = ({ selection, onClick }) => (
  <Menu.Item>
    {({ active }) => (
      <button
        type="button"
        onClick={onClick}
        className={classNames(
          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
          'text-left w-full px-4 py-2 font-mulish-semibold'
        )}
      >
        {selection}
      </button>
    )}
  </Menu.Item>
);

DropdownSelection.propTypes = {
  selection: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DropdownSelection;
