import React from "react";

// const dateIcon = require("../../public/images/date-icon.png");
// const locationIcon = require("./images/location-icon.png");
// const arrowIcon = require("./images/arrow.png");

const EventCard = () => {
  return (
    <div className="my-5 h-auto">
      <div className="h-48">
        <img
          src={process.env.PUBLIC_URL + "images/birthday_cake.png"}
          alt="date-icon"
          className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="bg-primaryWhite p-5 rounded-bl-md rounded-br-md">
        <div className="text-left">
          <p className="font-bold text-primaryDarkPurpleColor text-2xl">
            Movie Night
          </p>
          <p className="text-primaryDarkGray">
            👋 Hosted by <span className="font-semibold">Maej</span>
          </p>
        </div>
        <div className="my-5">
          {/* date */}
          <div className="my-5">
            <div className="bg-white h-14 rounded-md flex items-center justify-between">
              <div className="w-14">
                <img
                  src={process.env.PUBLIC_URL + "images/date-icon.png"}
                  alt="date-icon"
                  className="h-10"
                />
              </div>
              <div className="flex-col justify-center text-left text-sm w-full">
                <p className="text-primaryDarkPurpleColor font-semibold">
                  18 August 6:00PM
                </p>
                <p className="text-primaryDarkGray">
                  to <span className="font-semibold">19 August 1:00PM</span> UTC
                </p>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "images/arrow.png"}
                  alt="date-icon"
                  className="h-4 mr-2"
                />
              </div>
            </div>
          </div>
          {/* location */}
          <div className="my-5">
            <div className="bg-white h-14 rounded-md flex items-center justify-between">
              <div className="w-14">
                <img
                  src={process.env.PUBLIC_URL + "images/date-icon.png"}
                  alt="date-icon"
                  className="h-10"
                />
              </div>
              <div className="flex-col justify-center text-left text-sm w-full">
                <p className="text-primaryDarkPurpleColor font-semibold">
                  Street name
                </p>
                <p className="text-primaryDarkGray">Suburb, State, Postcode</p>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + "images/arrow.png"}
                  alt="date-icon"
                  className="h-4 mr-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
