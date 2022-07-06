import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MenuIcon, SearchIcon, XCircleIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from 'react-instantsearch-hooks-web';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import NavbarDropdown from './NavbarDropdown';
import CountryList from './CountryList';
import NavbarList from './NavbarList';

const searchClient = instantMeiliSearch(
  'http://localhost:7700',
  'Mi78pXmB8w9pWG9jwuAuc668QV1iP2MS',
  {
    placeholderSearch: false, // default: true.
    primaryKey: 'id', // default: undefined
  }
);

const Hit = ({ hit }) => (
  <>
    <Highlight
      attribute="title"
      hit={hit}
      highlightedTagName="strong"
      classNames={{
        highlighted: 'text-2xl font-mulish-bold',
      }}
    />
  </>
);

const Navbar = ({ microsite }) => {
  const router = useRouter();
  const data = router.query;
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClickNavbar = () => {
    setActive(!active);
  };

  const handleClickClose = () => {
    setActive(false);
  };

  const handleSubmitSearch = event => {
    event.preventDefault();
    router.push({
      pathname: `/search`,
      query: event.target[0].value,
    });
    setShowModal(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-wrap items-center py-2 bg-white">
        <Link href="/">
          <a aria-hidden="true" onClick={handleClickClose}>
            <div className="relative inline-flex items-center w-20 h-20 p-2 ml-16 xl:ml-20 2xl:ml-24 ">
              <Image
                src="/img/common/icon/edotco-logo.png"
                alt=""
                layout="fill"
                priority
              />
            </div>
          </a>
        </Link>
        {!microsite && (
          <>
            <button
              type="button"
              className="inline-flex p-3 ml-auto outline-none lg:hidden"
              onClick={handleClickNavbar}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <div
              className={`${
                active ? '' : 'hidden'
              } bg-gray-100 w-full mt-4 p-8 lg:w-0 lg:mt-0 lg:bg-transparent lg:p-0 lg:inline-flex lg:flex-grow`}
            >
              <div className="flex flex-col items-start w-full text-center lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center">
                <NavbarDropdown
                  title="About Us"
                  summaryTitle="ABOUT US"
                  summaryBody="At EDOTCO we're not waiting for tomorrow. Instead we're busy shaping the future, today"
                  href="/about-us"
                >
                  <ul className="fixed left-1/2 invisible hidden pt-1 lg:visible group-hover:block">
                    <NavbarList href="/about-us/our-brand">
                      Our Brand
                    </NavbarList>
                    <NavbarList href="/about-us/meet-our-team">
                      Meet Our Teem
                    </NavbarList>
                    <NavbarList href="/about-us/corporate-governance">
                      Corporate Governance
                    </NavbarList>
                    <NavbarList href="/about-us/awards-and-milestones">
                      Awards and Milestones
                    </NavbarList>
                  </ul>
                </NavbarDropdown>
                <Link href="/expertise">
                  <a
                    aria-hidden="true"
                    onClick={handleClickNavbar}
                    className="items-center justify-center w-full px-4 pb-4 text-lg lg:pb-0 lg:hidden font-mulish-semibold lg:w-auto xl:px-10 "
                  >
                    Expertise
                  </a>
                </Link>
                <NavbarDropdown
                  title="Expertise"
                  summaryTitle="EXPERTISE"
                  summaryBody="edotco Group has vast experience in providing and setting
              up communication towers throughout the Asia pacific
              region."
                  href="/expertise"
                >
                  <ul className="fixed left-1/2 invisible hidden pt-1 lg:visible group-hover:block">
                    <NavbarList href="/expertise/towers">Towers</NavbarList>
                    <NavbarList href="/expertise/solutions">
                      Solutions
                    </NavbarList>
                    <NavbarList href="/expertise/energy">Energy</NavbarList>
                    <NavbarList href="/expertise/msom">
                      Managed Services and Operation Maintenance
                    </NavbarList>
                    <NavbarList href="/expertise/fibre">Fibre</NavbarList>
                  </ul>
                </NavbarDropdown>
                <Link href="/media">
                  <a
                    aria-hidden="true"
                    onClick={handleClickNavbar}
                    className="items-center justify-center w-full px-4 pb-4 text-lg lg:pb-0 lg:hidden font-mulish-semibold lg:w-auto xl:px-10"
                  >
                    Media
                  </a>
                </Link>
                <NavbarDropdown
                  title="Media"
                  summaryTitle="MEDIA"
                  summaryBody="Take a look at the adventures happening throughout edotco
                      and get the latest news &amp; updates."
                  href="/media"
                >
                  <ul className="fixed left-1/2 invisible hidden pt-1 lg:visible group-hover:block">
                    <NavbarList href="/media/media-releases">
                      In The News
                    </NavbarList>
                    <NavbarList href="/media/content-hubs">
                      Content Hub
                    </NavbarList>
                    <NavbarList href="/media/reports">Reports</NavbarList>
                  </ul>
                </NavbarDropdown>
                <Link href="/life-edotco">
                  <a
                    aria-hidden="true"
                    onClick={handleClickNavbar}
                    className="items-center justify-center w-full px-4 pb-4 text-lg lg:pb-0 font-mulish-semibold lg:inline-flex lg:w-auto xl:px-10"
                  >
                    Life@edotco&copy;
                  </a>
                </Link>
              </div>
            </div>
          </>
        )}
        <div
          className={
            microsite
              ? `flex flex-col items-start w-full text-center lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center`
              : ''
          }
        >
          <NavbarDropdown
            flag={data.flag ? data.flag : 'global-emerald'}
            title={data.country ? data.country : 'Global'}
            summaryTitle="edotco Global"
            summaryBody="Our Global website Cras quis nulla commodo, aliquam lectus
              sed, blandit augue. Cras ullamcorper bibendum bibendum."
            href="/"
            microsite
          >
            <ul className="fixed left-1/2 ml-6 invisible hidden pt-1 lg:visible group-hover:block">
              <CountryList country="Malaysia" flag="malaysia-flag" />
              <CountryList country="Bangladesh" flag="bangladesh-flag" />
              <CountryList country="Sri Lanka" flag="srilanka-flag" />
              <CountryList country="Pakistan" flag="pakistan-flag" />
              <CountryList country="Cambodia" flag="cambodia-flag" />
            </ul>
            <ul className="fixed left-1/2 ml-72 invisible hidden pt-1 lg:visible group-hover:block">
              <CountryList country="Myanmar" flag="myanmar-flag" />
              <CountryList country="Laos" flag="laos-flag" />
              <CountryList country="Philippines" flag="philippines-flag" />
              <CountryList country="Indonesia" flag="indonesia-flag" />
            </ul>
          </NavbarDropdown>
        </div>
        <div className="mr-8 hidden lg:block">
          <button type="button" onClick={() => setShowModal(true)}>
            <SearchIcon className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex flex-column fixed top-0 mt-24 left-1/2 -translate-x-1/2 z-50 outline-none focus:outline-none w-full">
              <InstantSearch
                indexName="media-release"
                searchClient={searchClient}
              >
                <div className="w-2/3 bg-white border-white border-8 rounded-lg relative">
                  <SearchBox
                    autofocus
                    onSubmit={event => {
                      handleSubmitSearch(event);
                    }}
                    placeholder="Hi, what are you looking for?"
                    classNames={{
                      input:
                        'pl-12 py-4 w-full border-x-0 border-y-0 focus:ring-0  text-2xl font-mulish-semibold placeholder:text-zinc-400 text-green-900 caret-black',
                      submit: 'absolute left-0 top-0 transform translate-y-1/2',
                      reset: 'absolute right-0 top-0 transform py-2',
                      submitIcon: 'text-transparent',
                    }}
                    submitIconComponent={() => (
                      <SearchIcon className="w-8 h-8" aria-hidden="true" />
                    )}
                    resetIconComponent={() => (
                      <div className="text-transparent">
                        <XCircleIcon className="w-9 h-9" aria-hidden="true" />
                      </div>
                    )}
                  />
                  <div className="border-2 border-transparent" />
                  <Hits
                    title="Suggestions"
                    hitComponent={Hit}
                    classNames={{
                      list: 'border-t-2 text-2xl font-mulish',
                      emptyRoot: 'border-none',
                      item: 'pl-7 m-6',
                    }}
                  />
                </div>
              </InstantSearch>
            </div>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              aria-label="Close modal"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            />
          </>
        ) : null}
      </nav>
    </>
  );
};

Navbar.propTypes = {
  microsite: PropTypes.bool,
};

Navbar.defaultProps = {
  microsite: false,
};

export default Navbar;
