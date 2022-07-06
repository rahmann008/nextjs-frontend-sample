import React from 'react';
import Link from 'next/link';

const PDPA = () => (
  <div className="mb-12 text-sm sm:text-base">
    <input
      id="pdpa"
      name="pdpa"
      type="checkbox"
      required
      className="mb-1 mr-2 rounded text-secondary focus:outline-primary focus:ring-transparent"
    />
    <label htmlFor="first" className="mb-2 text-sm sm:text-base font-mulish">
      <span className="text-gray-400">
        I agree to edotco&apos;s Personal Data Protection Act as stated in the{' '}
      </span>
      <Link href="#" passHref>
        <span className="cursor-pointer text-secondary">PDPA form</span>
      </Link>
    </label>
  </div>
);

export default PDPA;
