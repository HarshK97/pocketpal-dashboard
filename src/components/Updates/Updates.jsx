import React from "react";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="w-full bg-white dark:bg-[#2a2a3b] rounded-[10px] p-4 px-4 py-10 flex flex-col gap-4 text-sm">
      {UpdatesData.map((update, index) => (
        <div key={index}>
          <div className="flex gap-2">
            <div>
              <span className="text-red-600 font-bold">{update.name}</span>
              <div className="mb-2">
                <span className="text-black dark:text-white">
                  {update.noti}
                </span>
              </div>
              <span className="text-gray-500 dark:text-gray-300">
                {update.time}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
