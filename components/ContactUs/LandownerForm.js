import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import PDPA from './PDPA';
import SubmitButton from './SubmitButton';
import SuccessAlert from './SuccessAlert';

const LandownerForm = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const [land, setLand] = useState(true);
  const [building, setBuilding] = useState(false);
  const type = land ? 'Land' : 'Building';

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.STRAPI_API_URL}/api/landowner-messages`, {
        data: {
          country: event.target.country.value,
          name: event.target.name.value,
          contact_number: event.target.contact_number.value,
          email: event.target.email.value,
          address: event.target.address.value,
          postcode: event.target.postcode.value,
          state: event.target.state.value,
          coordinate: event.target.coordinate.value,
          floors: event.target.floors.value,
          type,
        },
      })
      .then(response => {
        console.log(response);
        setSuccessAlert(true);
      })
      .catch(error => {
        console.log(error);
      });
    event.target.country.value = '';
    event.target.name.value = '';
    event.target.contact_number.value = '';
    event.target.email.value = '';
    event.target.address.value = '';
    event.target.postcode.value = '';
    event.target.state.value = '';
    event.target.coordinate.value = '';
    event.target.floors.value = '';
    setSuccessAlert(true);
  };

  const callbackFunction = bool => {
    setSuccessAlert(bool);
  };

  const handleClick = type => {
    switch (type) {
      case 'Land':
        setLand(true);
        setBuilding(false);
        break;
      case 'Building':
        setLand(false);
        setBuilding(true);
        break;
      default:
        setLand(true);
        setBuilding(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-6 text-gray-400 focus-within:text-secondary">
          <label
            htmlFor="country"
            className="text-sm sm:text-base font-mulish mb-2"
          >
            Select Country
          </label>
          <select
            name="country"
            id="country"
            className="lg:w-1/4 rounded focus:border-secondary h-12 focus:ring-0 text-black font-mulish-bold placeholder:font-mulish"
          >
            <option value="Malaysia">Malaysia</option>
            <option value="Bangladesh">Bangladesh</option>
          </select>
        </div>
        <InputForm
          type="text"
          id="name"
          name="name"
          label="Full Name"
          placeholder="(eg: John Doe)"
        />
        <InputForm
          type="text"
          id="contact_number"
          name="contact_number"
          label="Contact Number"
          placeholder="(eg: John Doe)"
        />
        <InputForm
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="(eg: JohnDoe@email.com)"
        />
        <InputForm
          type="text"
          id="address"
          name="address"
          label="Street Address"
          placeholder="(eg: Level 30, Axiata Tower, 9 Jalan Stesen Sentral 5, Kuala Lumpur Sentral)"
        />
        <div className="grid lg:grid-cols-2 lg:w-3/4">
          <InputForm
            type="text"
            id="postcode"
            name="postcode"
            label="Postcode"
            placeholder="(eg: 50470)"
          />
          <div className="flex flex-col sm:mb-6 text-gray-400 focus-within:text-secondary">
            <label
              htmlFor="state"
              className="text-sm sm:text-base font-mulish mb-2"
            >
              State
            </label>
            <select
              name="state"
              id="state"
              className="rounded focus:border-secondary focus:ring-0 h-12 text-black font-mulish-bold placeholder:font-mulish mb-6"
            >
              <option value="Selangor">Selangor</option>
              <option value="Career">Career</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
        </div>
        <label
          htmlFor="property_type"
          className="text-base sm:text-xl font-mulish-bold"
        >
          Property Type
        </label>
        <div className="flex flex-row my-6 mb-12">
          <button
            type="button"
            onClick={() => handleClick('Land')}
            className={`sm:text-xl font-mulish-bold border w-24 h-12 sm:w-40 mr-2 md:mr-6 lg:mr-12 ${
              land ? `bg-secondary text-white` : ''
            }`}
          >
            Land
          </button>
          <button
            type="button"
            onClick={() => handleClick('Building')}
            className={`sm:text-xl font-mulish-bold border w-24 h-12 sm:w-40 mr-2 md:mr-6 lg:mr-12 ${
              building ? `bg-secondary text-white` : ''
            }`}
          >
            Building
          </button>
        </div>
        {land && (
          <>
            <input type="text" id="floors" name="floors" className="hidden" />
            <InputForm
              type="text"
              id="coordinate"
              name="coordinate"
              label="Longitude/Latitude Coordinate"
              placeholder="(eg: 3.1342134146253504, 101.6848574377818)"
            />
          </>
        )}
        {building && (
          <>
            <InputForm
              type="text"
              id="floors"
              name="floors"
              label="Floors of the building"
              placeholder="(if applicable, insert N/A if not applicable)"
            />
            <InputForm
              type="text"
              id="coordinate"
              name="coordinate"
              label="Longitude/Latitude Coordinate"
              placeholder="(eg: 3.1342134146253504, 101.6848574377818)"
            />
          </>
        )}
        <PDPA />
        <SubmitButton />
      </form>
      {successAlert && <SuccessAlert callback={callbackFunction} />}
    </div>
  );
};

export default LandownerForm;
