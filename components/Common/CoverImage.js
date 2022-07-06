import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const CoverImage = ({ headerSmall, header, body, coverImage, microsite }) => (
  <>
    <div
      className={`relative z-0 w-full ${
        microsite ? 'h-128 lg:h-200' : 'h-96 md:h-128'
      } `}
    >
      <Image
        src={coverImage}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="left"
        priority
      />
      <div className="absolute z-10 px-4 text-white transform -translate-y-1/2 top-1/2 md:px-8 lg:px-20 sm:w-1/2 md:w-1/2 lg:w-8/12 xl:w-5/12">
        <div>
          <div className="pb-2 text-2xl font-mulish">{headerSmall}</div>
          <div className="pb-4 text-3xl md:text-4xl lg:text-6xl font-mulish-bold">
            {header}
          </div>
          {body &&
            body.map((value, index) => (
              <Link key={value.id} href={`#${index}`} passHref>
                <div className="flex flex-row items-center text-sm cursor-pointer lg:py-4 sm:text-base md:text-lg font-mulish text-grey">
                  0{index + 1}
                  <div className="relative z-10 w-12 h-12 mx-2 md:mx-6">
                    <Image
                      src="/img/common/icon/shape-path.png"
                      alt=""
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                  {value}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  </>
);

CoverImage.propTypes = {
  headerSmall: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  body: PropTypes.array,
  microsite: PropTypes.bool,
};

CoverImage.defaultProps = {
  body: [],
  microsite: false,
};

export default CoverImage;
