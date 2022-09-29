import React, { useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import Button from "./Button";

type FormValues = {
  eventName: string;
  hostName: string;
  location: string;
  photo: any;
};

const Form = () => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-5">
      <div className="mb-4">
        <input
          className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="event_name"
          type="text"
          placeholder="Event Name"
        />
        <input
          className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="host_name"
          type="text"
          placeholder="Host Name"
        />

        <input
          className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          placeholder="Location"
        />
      </div>

      <Button content="Submit" />
    </form>
  );
};

export default Form;
