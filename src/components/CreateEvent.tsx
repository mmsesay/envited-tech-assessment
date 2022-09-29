import React from "react";
import BaseLayout from "./BaseLayout";
import Form from "./Form";

const CreateEvent = () => {
  return (
    <BaseLayout>
      <div className="py-10 px-10">
        {/* text section */}
        <div className="container">
          <div className="text-center text-4xl font-bold">
            <p className="text-primaryDarkPurpleColor">
              Create an
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-primaryGradientColorOne to-primaryGradientColorTwo">
                Event
              </span>
            </p>
          </div>
          <div className="mt-6">
            <p className="text-base text-primaryDarkGray">
              Please fill in the form below to create your event
            </p>
          </div>
        </div>

        {/* form section */}
        <Form />
      </div>
    </BaseLayout>
  );
};

export default CreateEvent;
