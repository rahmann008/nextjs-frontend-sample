import React, { useState } from 'react';
import Image from 'next/image';
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';
import { mapStyles, clusterStyles } from '../../utils/mapStyles';
import { countryCoordinates, countryZoom } from '../../utils/countryLocations';
import { dummy } from '../../utils/towerLocations';

// const ClusterInfoWindow = ({ title, area, address, type, height }) => (
//   <InfoWindow
//     position={countryCoordinates[countryTag]}
//     onCloseClick={() => handleClickClose(false)}
//   >
//     <div>
//       <div className="font-mulish-black text-2xl text-primary py-4">
//         {title}
//       </div>
//       <table className="table-auto">
//         <tbody className="text-lg">
//           <tr className="bg-green-50">
//             <td className="font-mulish-extrabold px-4 pb-2">Area:</td>
//             <td className="font-mulish-semibold pr-4">{area}</td>
//           </tr>
//           <tr>
//             <td className="font-mulish-extrabold px-4 pb-2">Address:</td>
//             <td className="font-mulish-semibold pr-4">{address}</td>
//           </tr>
//           <tr className="bg-green-50">
//             <td className="font-mulish-extrabold px-4 pb-2">Structure Type:</td>
//             <td className="font-mulish-semibold pr-4">{type}</td>
//           </tr>
//           <tr>
//             <td className="font-mulish-extrabold px-4 pb-2">
//               Tower Height (ft):
//             </td>
//             <td className="font-mulish-semibold pr-4">{height}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </InfoWindow>
// );

const SiteLocator = ({ countryTag, country }) => {
  const [infoWindowCoordinate, setInfoWindowCoordinate] = useState();
  const [infoWindowOpen, setInfoWindowOpen] = useState();
  const containerStyle = {
    height: '900px',
  };
  const createKey = location => location.lat + location.lng;

  const handleClickOpen = (location, key) => {
    setInfoWindowCoordinate(location);
    setInfoWindowOpen(key);
  };
  const handleClickClose = () => {
    setInfoWindowOpen('');
  };
  return (
    <div className="scroll-mt-24 bg-grey" id="2">
      <div className="invisible lg:visible absolute mt-4 right-0 w-24 h-24 sm:w-44 sm:h-44">
        <Image
          src="/img/common/bg/right-quarter-wave-pattern.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="text-left p-12">
        <div className="text-3xl lg:text-4xl xl:text-5xl font-mulish-bold my-2 lg:my-6">
          Site Locator
        </div>
      </div>
      <LoadScript googleMapsApiKey={process.env.MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={{
            styles: mapStyles,
          }}
          center={countryCoordinates[countryTag]}
          zoom={countryZoom[countryTag]}
          onClick={() => handleClickClose()}
        >
          {/* <MarkerClusterer
            options={{
              averageCenter: true,
              styles: clusterStyles,
            }}
          >
            {clusterer =>
              towerLocations.map(location => (
                <>
                  <Marker
                    icon={{
                      url: '/img/microsite/site-locator/coverage-radius-zoomed-in.png',
                      scaledSize: new google.maps.Size(30, 30),
                    }}
                    key={createKey(location)}
                    position={location}
                    clusterer={clusterer}
                    onClick={() =>
                      handleClickOpen(location, createKey(location))
                    }
                    clickable
                  />
                </>
              ))
            }
          </MarkerClusterer>
          {infoWindowOpen && (
            <InfoWindow
              position={infoWindowCoordinate}
              onCloseClick={() => handleClickClose(false)}
              options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
            >
              <div>
                <div className="font-mulish-black text-2xl text-primary py-4">
                  Malaysia - 9558
                </div>
                <table className="table-auto">
                  <tbody className="text-lg">
                    <tr className="bg-green-50">
                      <td className="font-mulish-extrabold px-4 pb-2">Area:</td>
                      <td className="font-mulish-semibold pr-4">
                        Kuala Lumpur, Central
                      </td>
                    </tr>
                    <tr>
                      <td className="font-mulish-extrabold px-4 pb-2">
                        Address:
                      </td>
                      <td className="font-mulish-semibold pr-4">
                        Taman Seputih, Kuala Lumpur
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="font-mulish-extrabold px-4 pb-2">
                        Structure Type:
                      </td>
                      <td className="font-mulish-semibold pr-4">
                        Ground Based Tower
                      </td>
                    </tr>
                    <tr>
                      <td className="font-mulish-extrabold px-4 pb-2">
                        Tower Height (ft):
                      </td>
                      <td className="font-mulish-semibold pr-4">91</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </InfoWindow>
          )} */}
          <MarkerClusterer
            options={{
              averageCenter: true,
              styles: clusterStyles,
            }}
          >
            {clusterer =>
              dummy.map(tower => (
                <>
                  <Marker
                    icon={{
                      url: '/img/microsite/site-locator/coverage-radius-zoomed-in.png',
                      scaledSize: new google.maps.Size(30, 30),
                    }}
                    key={createKey(tower.location)}
                    position={tower.location}
                    clusterer={clusterer}
                    onClick={() =>
                      handleClickOpen(tower.location, createKey(tower.location))
                    }
                    clickable
                  />
                  {infoWindowCoordinate &&
                    infoWindowOpen === createKey(tower.location) && (
                      <InfoWindow
                        position={infoWindowCoordinate}
                        onCloseClick={() => handleClickClose()}
                        options={{
                          pixelOffset: new window.google.maps.Size(0, -30),
                        }}
                      >
                        <div>
                          <div className="font-mulish-black text-2xl text-primary py-4">
                            {`${country} - ${tower.code}`}
                          </div>
                          <table className="table-auto">
                            <tbody className="text-lg">
                              <tr className="bg-green-50">
                                <td className="font-mulish-extrabold px-4 pb-2">
                                  Area:
                                </td>
                                <td className="font-mulish-semibold pr-4">
                                  {tower.area}
                                </td>
                              </tr>
                              <tr>
                                <td className="font-mulish-extrabold px-4 pb-2">
                                  Address:
                                </td>
                                <td className="font-mulish-semibold pr-4">
                                  {tower.address}
                                </td>
                              </tr>
                              <tr className="bg-green-50">
                                <td className="font-mulish-extrabold px-4 pb-2">
                                  Structure Type:
                                </td>
                                <td className="font-mulish-semibold pr-4">
                                  {tower.type}
                                </td>
                              </tr>
                              <tr>
                                <td className="font-mulish-extrabold px-4 pb-2">
                                  Tower Height (ft):
                                </td>
                                <td className="font-mulish-semibold pr-4">
                                  {tower.height}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </InfoWindow>
                    )}
                </>
              ))
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

SiteLocator.propTypes = {
  countryTag: PropTypes.object.isRequired,
  country: PropTypes.string.isRequired,
};

export default SiteLocator;
