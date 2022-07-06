import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import PropTypes from 'prop-types';
import formattedDate from '../../utils/formattedDate';
import YearButton from '../Media/YearButton';
import RightArrow from '../Common/RightArrow';
import { carouselAwardSettings } from '../../utils/carouselSettings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedAwards = ({ content }) => {
  const awardsDate = formattedDate(
    new Date(content.attributes.published_date).toISOString()
  );
  const coverImage = `${process.env.STRAPI_API_URL}${content.attributes.cover_image.data.attributes.url}`;
  return (
    <Link href={`/media/content-hubs/${content.id}`} passHref>
      <div className="cursor-pointer sm:p-6">
        <div className="pb-2 text-sm text-gray-500 uppercase sm:pb-4 md:text-base font-mulish-bold">
          {awardsDate}
        </div>
        <div className="pb-2 mb-6 text-base leading-relaxed line-clamp-2 sm:text-3xl lg:text-4xl xl:text-6xl font-mulish-bold">
          {content.attributes.title}
        </div>
        <div className="mb-2 text-sm text-justify sm:mb-4 xl:pb-1 md:text-base xl:text-xl line-clamp-2 font-mulish">
          {content.attributes.content}
        </div>
        <RightArrow>Read More</RightArrow>
        <div className="mt-6 overflow-hidden text-center">
          <Image
            src={coverImage}
            alt=""
            objectFit="cover"
            width={1500}
            height={800}
            unoptimized
          />
        </div>
      </div>
    </Link>
  );
};

const Awards = ({ contentHubs }) => {
  const [year, setYear] = useState('2022');
  const [general, setGeneral] = useState(true);
  const [sustainability, setSustainability] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [human, setHuman] = useState(false);
  const [topic, setTopic] = useState('General');

  const [latestAwards, setLatestAwards] = useState(false);
  const data = Array.from(latestAwards);

  useEffect(() => {
    setLatestAwards(
      contentHubs.data
        .filter(
          contentHub =>
            contentHub.attributes.type === 'Award' &&
            (contentHub.attributes.topic === topic || topic === 'General') &&
            contentHub.attributes.published_date.slice(0, 4).toString() === year
        )
        .slice(0, 3)
    );
  }, [contentHubs, topic, year]);

  const handleClick = topic => {
    switch (topic) {
      case 'General':
        setGeneral(true);
        setSustainability(false);
        setTechnology(false);
        setHuman(false);
        setTopic('General');
        break;
      case 'Sustainability':
        setGeneral(false);
        setSustainability(true);
        setTechnology(false);
        setHuman(false);
        setTopic('Sustainability');
        break;
      case 'Technology':
        setGeneral(false);
        setSustainability(false);
        setTechnology(true);
        setHuman(false);
        setTopic('Technology');
        break;
      case 'Human':
        setGeneral(false);
        setSustainability(false);
        setTechnology(false);
        setHuman(true);
        setTopic('Human Resource');
        break;
      default:
        setGeneral(true);
        setSustainability(false);
        setTechnology(false);
        setHuman(false);
        setTopic('General');
    }
  };
  return (
    <>
      <div className="absolute w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/down-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex flex-col items-end px-8 pt-24 mt-20 mb-12 sm:px-12 xl:px-20 place-content-between">
        <div className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-mulish text-primary">
          04
        </div>
        <div className="mb-6 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
          Awards &amp; Milestones
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-10/12 px-8 mb-10 sm:px-12 xl:px-20 md:mb-24">
          <div className="flex flex-row items-center justify-start mb-12 place-content-between">
            <button
              type="button"
              onClick={() => handleClick('General')}
              className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-2 md:mx-8 ${
                general
                  ? 'rounded border-b-4 border-primary'
                  : 'border-b-4 border-transparent'
              }`}
            >
              General
            </button>
            <button
              type="button"
              onClick={() => handleClick('Sustainability')}
              className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-2 md:mx-8 ${
                sustainability
                  ? 'rounded border-b-4 border-primary'
                  : 'border-b-4 border-transparent'
              }`}
            >
              Sustainability
            </button>
            <button
              type="button"
              onClick={() => handleClick('Technology')}
              className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-2 md:mx-8 ${
                technology
                  ? 'rounded border-b-4 border-primary'
                  : 'border-b-4 border-transparent'
              }`}
            >
              Technology
            </button>
            <button
              type="button"
              onClick={() => handleClick('Human')}
              className={`text-xs lg:text-sm xl:text-base relative font-mulish-semibold mx-2 md:mx-8 ${
                human
                  ? 'rounded border-b-4 border-primary'
                  : 'border-b-4 border-transparent'
              }`}
            >
              Human Resource
            </button>
          </div>
          <Slider {...carouselAwardSettings}>
            {data.map(data => (
              <FeaturedAwards key={data.id} content={data} />
            ))}
          </Slider>
        </div>
        <div className="flex-col items-center justify-center hidden w-2/12 md:flex">
          <div className="hidden md:flex absolute mr-[70px] h-136 lg:h-164 xl:h-192 2xl:h-220 mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 border-l border-black" />
          <YearButton
            year={year}
            clickedYear="2015"
            onClick={() => setYear('2015')}
            awards
          />
          <YearButton
            year={year}
            clickedYear="2016"
            onClick={() => setYear('2016')}
            awards
          />
          <YearButton
            year={year}
            clickedYear="2017"
            onClick={() => setYear('2017')}
            awards
          />
          <YearButton
            year={year}
            clickedYear="2018"
            onClick={() => setYear('2018')}
            awards
          />
          <YearButton
            year={year}
            clickedYear="2019"
            onClick={() => setYear('2019')}
            awards
          />
          <YearButton
            year={year}
            clickedYear="2020"
            onClick={() => setYear('2020')}
            awards
          />
          <YearButton
            year={year}
            clickedYear="2021"
            onClick={() => setYear('2021')}
            awards
          />
          <YearButton
            year={year}
            clickedYear="2022"
            onClick={() => setYear('2022')}
            awards
          />
        </div>
      </div>
    </>
  );
};

FeaturedAwards.propTypes = {
  content: PropTypes.object.isRequired,
};

Awards.propTypes = {
  contentHubs: PropTypes.object.isRequired,
};

export default Awards;
