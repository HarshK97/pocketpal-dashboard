import React from "react";
import { Lightbulb } from "lucide-react";

const Tips = () => {
  return (
    <div className="flex items-center justify-start flex-row gap-6 bg-black py-4 px-8 mt-4 text-white rounded-lg">
      <div className="rounded-full bg-(--primary-color) p-2">
        <Lightbulb className="text-black" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Daily Saving Tips</div>
        <div>
          Try the "52-Week Challenge": Save ₹1 in week, ₹2 in week 2, and so on.
          By the end of the year, you'll have saved ₹1,378!
        </div>
      </div>
    </div>
  );
};

export default Tips;
