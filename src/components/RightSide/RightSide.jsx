import React from "react";
import Updates from "../Updates/Updates";
import Chatbot from "../Chatbot/Chatbot";

const RightSide = () => {
  return (
    <div className="flex flex-col w-full xl:w-[95%] pt-[1rem] gap-[1rem]">
      <h3 className="text-xl text-black dark:text-white font-bold">Updates</h3>
      <Updates />
      <Chatbot />
    </div>
  );
};

export default RightSide;
