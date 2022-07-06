import React from 'react';
import PropTypes from 'prop-types';
import DownloadButton from '../Common/DownloadButton';

const ContentCard = ({ title, children, privacy }) => (
  <div className="pb-6 md:pb-14 text-sm md:text-lg lg:text-xl">
    <div className="flex flex-col md:flex-row mb-6 md:mb-12 md:items-center">
      <div className="text-lg md:text-xl font-mulish-bold md:mr-12">
        {title}
      </div>
      {privacy && <DownloadButton href="#">Download</DownloadButton>}
    </div>
    <div className="font-mulish">{children}</div>
  </div>
);

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  privacy: PropTypes.bool.isRequired,
};

export default ContentCard;
