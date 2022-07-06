import React, { useState, useEffect } from 'react';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import ContentHubsPostPreview from './ContentHubsPostPreview';
import { PAGINATION_INCREMENT } from '../../../utils/pagination';

const ContentHubsLatestPost = ({ contentHubs, country, type, topic, year }) => {
  const [latestContentHubs, setLatestContentHubs] = useState(false);
  const [paginationNumber, setPaginationNumber] = useState(6);
  const [loadMoreItems, setLoadMoreItems] = useState(false); // default is initialState
  const data = Array.from(latestContentHubs);

  const loadMore = () => {
    setPaginationNumber(paginationNumber + PAGINATION_INCREMENT);
    if (paginationNumber + PAGINATION_INCREMENT >= latestContentHubs.length) {
      setLoadMoreItems(false);
    }
  };

  useEffect(() => {
    setLatestContentHubs(
      contentHubs.data.filter(
        contentHub =>
          (contentHub.attributes.country === country || country === 'All') &&
          (contentHub.attributes.type === type || type === 'All') &&
          (contentHub.attributes.topic === topic || topic === 'All') &&
          contentHub.attributes.published_date.slice(0, 4).toString() === year
      )
    );
    setLoadMoreItems(
      data.length > 6 && paginationNumber <= data.length ? data.length : false
    );
  }, [contentHubs, data.length, paginationNumber, country, type, topic, year]);

  const renderContentHubsPostPreview = () =>
    data
      .slice(0, paginationNumber)
      .map(contentHub => (
        <ContentHubsPostPreview contentHub={contentHub} key={contentHub.id} />
      ));

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 px-6 md:grid-cols-2 xl:grid-cols-3 gap-x-16 sm:px-12">
          {renderContentHubsPostPreview()}
        </div>
        {loadMoreItems && (
          <button type="button" onClick={loadMore}>
            <div className="flex flex-col items-center justify-center mt-12 text-sm animate-bounce md:text-base xl:text-xl font-mulish-semibold text-emerald-600">
              <div className="mb-2">Load More</div>
              <div>
                <ArrowCircleDownIcon className="w-6 h-6 sm:h-8 sm:w-8 xl:h-10 xl:w-10 " />
              </div>
            </div>
          </button>
        )}
      </div>
    </>
  );
};

ContentHubsLatestPost.propTypes = {
  contentHubs: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default ContentHubsLatestPost;
