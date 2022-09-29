import React from "react";
import { useNavigate } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import EventCard from "./EventCard";
import Button from "./Button";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <BaseLayout>
      <div className="py-10 px-10">
        {/* text section */}
        <div className="container">
          <div className="text-center text-4xl font-bold">
            <p className="text-primaryDarkPurpleColor">Imagine if</p>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradientColorOne to-primaryGradientColorTwo">
              Snapchat
            </span>
            <p className="text-primaryDarkPurpleColor">had events.</p>
          </div>
          <div className="mt-6">
            <p className="text-base text-primaryDarkGray">
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
        </div>

        {/* card section */}
        <EventCard />

        {/* button */}
        <div className="my-3">
          {/* <Button content="🎉 Create my event"/> */}
          <button
            onClick={() => navigate("/create")}
            className="bg-gradient-to-r from-primaryGradientColorOne to-primaryGradientColorTwo w-full h-14 rounded-md text-white font-semibold text-lg"
          >
            🎉 Create my event
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Landing;
