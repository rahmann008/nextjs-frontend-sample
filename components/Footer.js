import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
  <>
    <div className="flex flex-col justify-around w-full pt-10 bg-primary lg:flex-row lg:px-24">
      <div className="p-5 pt-2 text-center lg:w-1/5 lg:text-left ">
        <ul>
          <p className="text-center">
            <Image
              src="/img/common/icon/edotco-logo.png"
              alt=""
              width="100"
              height="100"
              priority
            />
          </p>
          <p className="pb-4 text-lg text-white font-mulish-semibold drop-shadow-lg lg:text-base">
            edotco Malaysia Sdn Bhd
          </p>
          <div className="flex flex-col pb-2">
            <li className="pb-2 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:text-base">
              Level 19, Axiata Tower
            </li>
            <li className="pb-2 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:text-base">
              9 Jalan Stesen Sentral 5,
            </li>
            <li className="pb-2 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:text-base">
              Kuala Lumpur Sentral, 50470
            </li>
            <li className="pb-2 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:text-base">
              Kuala Lumpur, Malaysia
            </li>
          </div>
          <div className="flex flex-col pb-5">
            <li className="text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:text-base">
              E: marketing_my@edotcogroup.com
            </li>
          </div>
          <div className="flex flex-col pb-5">
            <li className="text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:text-base">
              Tel: +603 22656893
            </li>
          </div>
        </ul>
      </div>
      <div className="p-5 text-center lg:w-1/6 lg:text-left">
        <ul>
          <p className="pb-6 text-lg text-white font-mulish-semibold drop-shadow-lg lg:pb-8 lg:text-base">
            <Link href="#">About Us</Link>
          </p>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Who We Are</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Meet The Team</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Corporate Governance</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Awards &amp; Milestones</Link>
          </li>
        </ul>
      </div>
      <div className="p-5 text-center lg:w-1/6 lg:text-left">
        <ul>
          <p className="pb-6 text-lg text-white font-mulish-semibold drop-shadow-lg lg:pb-8 lg:text-base">
            <Link href="#">Expertise</Link>
          </p>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Towers</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Solutions</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Energy</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Managed Services &amp; Operations Management</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Fibre</Link>
          </li>
        </ul>
      </div>
      <div className="p-5 text-center lg:w-1/6 lg:text-left">
        <ul>
          <p className="pb-6 text-lg text-white font-mulish-semibold drop-shadow-lg lg:pb-8 lg:text-base">
            <Link href="#">Sustainability</Link>
          </p>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Environment</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Social</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Governance &amp; Ethics</Link>
          </li>
        </ul>
      </div>
      <div className="p-5 text-center lg:w-1/6 lg:text-left">
        <ul>
          <p className="pb-6 text-lg text-white font-mulish-semibold drop-shadow-lg lg:pb-8 lg:text-base">
            <Link href="#">Media</Link>
          </p>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">In The News</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Content Hub</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Success Stories</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Reports &amp; Publication</Link>
          </li>
        </ul>
      </div>
      <div className="pt-5 pb-8 text-center lg:w-1/6 lg:text-left">
        <ul>
          <p className="pb-6 text-lg text-white font-mulish-semibold drop-shadow-lg lg:pb-8 lg:text-base">
            <Link href="#">Life@edotco&copy;</Link>
          </p>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Bionic Org</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Diversity Equity &amp; Inclusion</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Employee Stores</Link>
          </li>
          <li className="pb-4 text-gray-200 cursor-pointer font-mulish drop-shadow-lg lg:pb-6 lg:text-base">
            <Link href="#">Join Us</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col justify-between px-12 lg:px-24 bg-zinc-900 lg:flex-row">
      <div className="flex flex-row justify-center py-8">
        <a
          href="https://www.facebook.com/edotcogroup/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/img/common/icon/facebook-logo.png"
              alt=""
              layout="fill"
              priority
            />
          </div>
        </a>
        <a
          href="https://twitter.com/edotcogroup"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/img/common/icon/facebook-logo.png"
              alt=""
              layout="fill"
              priority
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/e-co-group-sdn-bhd/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <div className="relative w-10 h-10">
            <Image
              src="/img/common/icon/facebook-logo.png"
              alt=""
              layout="fill"
              priority
            />
          </div>
        </a>
      </div>
      <span className="pb-8 text-sm text-center text-gray-200 font-mulish lg:text-base lg:py-6 lg:text-right">
        <Link href="/footer-links/whistleblowing">Whistleblowing</Link>
        <span>&nbsp; | &nbsp;</span>
        <Link href="/footer-links/scam-notice">Scam Notice</Link>
        <span>&nbsp; | &nbsp;</span>
        <Link href="/footer-links/terms-of-use">Terms of Use</Link>
        <span>&nbsp; | &nbsp;</span>
        <Link href="/footer-links/privacy-policy">Privacy Statement</Link>
        <br />
        <br />
        &copy; 2020 edotco Group Sdn Bhd (1022843-U). ALL RIGHTS RESERVED.
      </span>
    </div>
  </>
);

export default Footer;
