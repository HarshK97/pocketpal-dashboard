import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import BelowSection from "../BelowSection/BelowSection";
import Tips from "../Tips/Tips";

const MainDash = () => {
  return (
    <div className="flex flex-col gap-8 px-4 py-6 w-[80%]">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        Welcome Back, Harsh!
      </h1>
      <Cards />
      <Tips />
      <Table />
      <BelowSection />
    </div>
  );
};

export default MainDash;
