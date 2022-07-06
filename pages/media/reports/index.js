import axios from 'axios';
import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import ReportsLatestPost from '../../../components/Media/Reports/ReportsLatestPost';
import Feedback from '../../../components/Common/Feedback';
import Banner from '../../../components/Common/Banner';
import RelatedMedia from '../../../components/Media/RelatedMedia';
import CoverImage from '../../../components/Common/CoverImage';

const Reports = ({ reports }) => {
  const country = 'All';
  return (
    <>
      <CoverImage
        headerSmall="Media"
        header="Reports"
        coverImage="/img/media/reports/reports-header.png"
      />
      <Banner
        subpage={['Media', 'Reports']}
        href={['/media', '/media/reports']}
      />
      <div>
        <div className="flex flex-col px-8 mt-20 mb-10 sm:px-10 xl:px-12 md:mb-0 md:flex-row place-content-between">
          <div>
            <div className="mb-6 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
              Reports
            </div>
            <div className="mb-6 text-base lg:text-lg xl:text-xl font-mulish-semibold">
              Browse through our reports loremipsum nec viverra eleifend lacus,
              vitae sit amet blandit dolor
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Menu>
              <Menu.Button className="flex flex-row px-1 py-1 border rounded w-44 lg:w-60 sm:px-3 sm:py-4 place-content-between border-slate-900 font-mulish">
                <span>
                  Category:
                  <span className="font-mulish-bold"> {country}</span>
                </span>
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </Menu>
          </div>
        </div>
        <ReportsLatestPost reports={reports} />
      </div>
      <RelatedMedia
        tileHeader={['Content Hub', 'In The News']}
        tileDescription={[
          'Browse through our articles and podcast lorempisum nec viverraeleifend lacus, vitae sit amet blandit dolor',
          "Browse through what's been happening throughout the years",
        ]}
        tileHref={['/media/content-hubs', '/media/media-releases']}
        tileImage={[
          '/img/media/content-hubs/content-hub.png',
          '/img/media/media-releases/in-the-news-img.png',
        ]}
        subpage
      />
      <Feedback />
    </>
  );
};

Reports.propTypes = {
  reports: PropTypes.object.isRequired,
};

export default Reports;

export async function getStaticProps() {
  const postRes = await axios.get(`${process.env.STRAPI_API_URL}/api/reports`);
  return {
    props: {
      reports: postRes.data,
    },
    revalidate: 10,
  };
}
