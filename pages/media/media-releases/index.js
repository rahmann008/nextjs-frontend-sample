import axios from 'axios';
import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import MediaReleasesLatestPost from '../../../components/Media/MediaReleases/MediaReleasesLatestPost';
import Feedback from '../../../components/Common/Feedback';
import Banner from '../../../components/Common/Banner';
import RelatedMedia from '../../../components/Media/RelatedMedia';
import DropdownSelection from '../../../components/Media/Dropdown/DropdownSelection';
import MenuButton from '../../../components/Media/Dropdown/MenuButton';
import YearButton from '../../../components/Media/YearButton';
import CoverImage from '../../../components/Common/CoverImage';

const MediaReleases = ({ mediaReleases }) => {
  const router = useRouter();
  const data = router.query;
  const [country, setCountry] = useState(data.country ? data.country : 'All');
  const [year, setYear] = useState('2022');

  return (
    <>
      <CoverImage
        headerSmall="Media"
        header="In The News"
        coverImage="/img/media/media-releases/in-the-news-hero.png"
      />
      <Banner
        subpage={['Media', 'In The News']}
        href={['/media', '/media/media-releases']}
      />
      <>
        <div className="flex flex-col px-8 mt-20 mb-10 sm:px-10 xl:px-12 md:mb-0 place-content-between">
          <div>
            <div className="mb-6 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
              In The News
            </div>
            <div className="mb-6 text-base lg:text-lg xl:text-xl font-mulish-semibold">
              Browse through what&apos;s been happening throughout the years.
            </div>
          </div>
          <div className="flex flex-col sm:flex-row z-10">
            <div className="flex flex-col justify-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton title="Country :" value={country} />
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute left-0 w-44 lg:w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <DropdownSelection
                        selection="All"
                        onClick={() => setCountry('All')}
                      />
                      <DropdownSelection
                        selection="Malaysia"
                        onClick={() => setCountry('Malaysia')}
                      />
                      <DropdownSelection
                        selection="Bangladesh"
                        onClick={() => setCountry('Bangladesh')}
                      />
                      <DropdownSelection
                        selection="Sri Lanka"
                        onClick={() => setCountry('Sri Lanka')}
                      />
                      <DropdownSelection
                        selection="Pakistan"
                        onClick={() => setCountry('Pakistan')}
                      />
                      <DropdownSelection
                        selection="Cambodia"
                        onClick={() => setCountry('Cambodia')}
                      />
                      <DropdownSelection
                        selection="Myanmar"
                        onClick={() => setCountry('Myanmar')}
                      />
                      <DropdownSelection
                        selection="Laos"
                        onClick={() => setCountry('Laos')}
                      />
                      <DropdownSelection
                        selection="Philippines"
                        onClick={() => setCountry('Philippines')}
                      />
                      <DropdownSelection
                        selection="Indonesia"
                        onClick={() => setCountry('Indonesia')}
                      />
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="flex md:hidden flex-col justify-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton title="Year:" value={year} />
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute left-0 w-44 lg:w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <DropdownSelection
                        selection="2022"
                        onClick={() => setYear('2022')}
                      />
                      <DropdownSelection
                        selection="2021"
                        onClick={() => setYear('2021')}
                      />
                      <DropdownSelection
                        selection="2020"
                        onClick={() => setYear('2020')}
                      />
                      <DropdownSelection
                        selection="2019"
                        onClick={() => setYear('2019')}
                      />
                      <DropdownSelection
                        selection="2018"
                        onClick={() => setYear('2018')}
                      />
                      <DropdownSelection
                        selection="2017"
                        onClick={() => setYear('2017')}
                      />
                      <DropdownSelection
                        selection="2016"
                        onClick={() => setYear('2016')}
                      />
                      <DropdownSelection
                        selection="2015"
                        onClick={() => setYear('2015')}
                      />
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute my-12 w-full border-b border-black" />
        <div className="hidden md:flex items-center justify-center mt-9">
          <YearButton
            year={year}
            clickedYear="2015"
            onClick={() => setYear('2015')}
          />
          <YearButton
            year={year}
            clickedYear="2016"
            onClick={() => setYear('2016')}
          />
          <YearButton
            year={year}
            clickedYear="2017"
            onClick={() => setYear('2017')}
          />
          <YearButton
            year={year}
            clickedYear="2018"
            onClick={() => setYear('2018')}
          />
          <YearButton
            year={year}
            clickedYear="2019"
            onClick={() => setYear('2019')}
          />
          <YearButton
            year={year}
            clickedYear="2020"
            onClick={() => setYear('2020')}
          />
          <YearButton
            year={year}
            clickedYear="2021"
            onClick={() => setYear('2021')}
          />
          <YearButton
            year={year}
            clickedYear="2022"
            onClick={() => setYear('2022')}
          />
        </div>
        <div className="md:mt-32" />
        <MediaReleasesLatestPost
          mediaReleases={mediaReleases}
          country={country}
          year={year}
        />
      </>
      <RelatedMedia
        tileHeader={['Content Hub', 'Reports']}
        tileDescription={[
          'Browse through our articles and podcast lorempisum nec viverraeleifend lacus, vitae sit amet blandit dolor',
          'Browse through our reports loremipsum nec viverra eleifend lacusvitae sit amet blandit dolor',
        ]}
        tileHref={['/media/content-hubs', '/media/reports']}
        tileImage={[
          '/img/media/content-hubs/content-hub.png',
          '/img/media/reports/reports-img.png',
        ]}
        subpage
      />
      <Feedback />
    </>
  );
};

MediaReleases.propTypes = {
  mediaReleases: PropTypes.object.isRequired,
};

export default MediaReleases;

export async function getStaticProps() {
  const postRes = await axios.get(
    `${process.env.STRAPI_API_URL}/api/media-releases`
  );
  return {
    props: {
      mediaReleases: postRes.data,
    },
    revalidate: 10,
  };
}
