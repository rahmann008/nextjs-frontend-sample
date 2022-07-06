import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const AboutInfo = ({ numbers, description, mid, users }) => (
  <div className="flex flex-col justify-center items-center text-center mx-12 my-6 xl:my-0">
    <div className="text-secondary mb-2 xl:mb-6">
      <span className="font-mulish-bold text-4xl xl:text-6xl">{numbers}</span>
      {!mid &&
        (users ? (
          <span className="font-mulish text-xl xl:text-3xl"> Million</span>
        ) : (
          <span className="font-mulish text-xl xl:text-3xl"> Exabytes</span>
        ))}
    </div>
    <div className="font-mulish xl:text-xl">{description}</div>
  </div>
);

const Divider = () => <div className="xl:border-r-2 xl:h-56" />;

const About = ({ imgFolder, img, title, children, numbers }) => (
  <>
    <div id="0" className="bg-white h-full flex flex-col xl:flex-row">
      <div className="relative z-10 w-full p-10 bg-white xl:absolute right-0 xl:mt-44 xl:w-1/4 xl:drop-shadow-xl">
        <div className="flex flex-col">
          <div className="w-10/12">
            <div className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-mulish-bold">
              {title}
            </div>
          </div>
          {children}
        </div>
      </div>
      <div className="xl:inline relative xl:w-[90%] xl:h-200">
        <Image
          src={`/img/${imgFolder}/${img}`}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="relative items-center top-0 my-20 xl:my-56 text-white w-full bg-zinc-900/50">
          <div className="flex flex-col xl:flex-row justify-center items-center xl:pr-44 xl:py-20">
            <AboutInfo
              numbers={numbers[0]}
              description="Mobile Users Connected"
              users
            />
            <Divider />
            <AboutInfo
              numbers={numbers[1]}
              description="Towers and managed sites (Owned &amp; Managed)"
              mid
            />
            <Divider />
            <AboutInfo
              numbers={numbers[2]}
              description="Mobile data consumed from our towers in 2021"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

AboutInfo.propTypes = {
  numbers: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  users: PropTypes.string.isRequired,
  mid: PropTypes.bool.isRequired,
};

About.propTypes = {
  imgFolder: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  numbers: PropTypes.string.isRequired,
};

export default About;
