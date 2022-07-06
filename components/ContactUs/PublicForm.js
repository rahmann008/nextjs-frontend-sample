import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import PDPA from './PDPA';
import SubmitButton from './SubmitButton';
import SuccessAlert from './SuccessAlert';

const PublicForm = () => {
  const [successAlert, setSuccessAlert] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.STRAPI_API_URL}/api/public-messages`, {
        data: {
          name: event.target.name.value,
          email: event.target.email.value,
          contact_group: event.target.contact_group.value,
          company_name: event.target.company_name.value,
          message: event.target.message.value,
        },
      })
      .then(response => {
        console.log(response);
        setSuccessAlert(true);
      })
      .catch(error => {
        console.log(error);
      });
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.company_name.value = '';
    event.target.message.value = '';
  };
  const callbackFunction = bool => {
    setSuccessAlert(bool);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputForm
          type="text"
          id="name"
          name="name"
          label="Full Name"
          placeholder="(eg: John Doe)"
        />
        <InputForm
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="(eg: JohnDoe@email.com)"
        />
        <div className="flex flex-col text-gray-400 sm:mb-6 focus-within:text-secondary">
          <label
            htmlFor="contact_group"
            className="mb-2 text-sm sm:text-base font-mulish"
          >
            Contact Group
          </label>
          <select
            name="contact_group"
            id="contact_group"
            className="h-12 mb-6 text-black rounded lg:w-3/4 focus:border-secondary focus:ring-0 font-mulish-bold placeholder:font-mulish"
          >
            <option value="Marketing">Marketing</option>
            <option value="Career">Career</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <InputForm
          type="text"
          id="company_name"
          name="company_name"
          label="Company Name"
          placeholder="(eg: ABC Company)"
        />
        <InputForm
          type="text"
          id="message"
          name="message"
          label="Your Message:"
          placeholder="(eg: Hi, I would like to enquire...)"
        />
        <PDPA />
        <SubmitButton />
      </form>
      {successAlert && <SuccessAlert callback={callbackFunction} />}
    </div>
  );
};

export default PublicForm;
