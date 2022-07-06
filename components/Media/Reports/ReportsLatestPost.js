import React, { useState, useEffect } from 'react';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';
import ReportsPostPreview from './ReportsPostPreview';
import { PAGINATION_INCREMENT } from '../../../utils/pagination';

const ReportsLatestPost = ({ reports }) => {
  const [latestReports, setLatestReports] = useState(false);
  const totalItem = reports.meta.pagination.total;
  const [paginationNumber, setPaginationNumber] = useState(6);
  const initialState = totalItem > paginationNumber;
  const [loadMoreItems, setLoadMoreItems] = useState(initialState);
  useEffect(() => {
    setLatestReports(reports.data.slice(0, paginationNumber));
  }, [reports, paginationNumber]);

  const data = Array.from(latestReports);
  const renderReportsPostPreviews = () =>
    data.map(report => <ReportsPostPreview report={report} key={report.id} />);

  const loadMore = () => {
    setPaginationNumber(paginationNumber + PAGINATION_INCREMENT);
    if (paginationNumber + PAGINATION_INCREMENT >= totalItem) {
      setLoadMoreItems(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 px-8 sm:px-10 xl:px-12 xl:grid-cols-2 md:gap-x-10 xl:gap-x-20">
          {renderReportsPostPreviews()}
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

ReportsLatestPost.propTypes = {
  reports: PropTypes.object.isRequired,
};

export default ReportsLatestPost;
