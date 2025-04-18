import React, { useState } from "react";
import "./Card.css";
// import { AnimateSharedLayout } from "framer-motion";
import { LayoutGroup, motion } from "motion/react";
import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import { easeQuadInOut } from "d3-ease";
import Chart from "react-apexcharts";
import AnimatedProgressProvider from "../AnimatedProgressProvider/AnimatedProgressProvider";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      layout
      className="rounded-[0.7rem] flex flex-1 h-[9rem] text-black dark:text-white bg-white dark:bg-gray-800 cursor-pointer p-[1rem]"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="flex-1 flex flex-col justify-end gap-[1rem]">
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={param.barValue}
          duration={1.4}
          easingFunction={easeQuadInOut}
        >
          {(barValue) => {
            const roundedValue = Math.round(barValue);
            return (
              <CircularProgressbar
                value={barValue}
                text={`${roundedValue}%`}
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
        <span className="text-[17px] font-bold text-black dark:text-white">
          {param.title}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between items-end">
        <Png className="h-[1.5rem] fill-white" />{" "}
        <span className="text-[22px] font-bold">
          ₹<CountUp end={param.value} duration={1} />
        </span>
        <span className="text-[12px]">{param.time}</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
        toolbar: { show: false },
        foreColor: "#333",
      },
      fill: {
        colors: ["#999"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["black"],
      },
      tooltip: {
        theme: isDark ? "dark" : "light",
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
        borderColor: isDark ? "#444" : "#ccc",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      layout
      className="fixed inset-0 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
    >
      <div
        className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] h-[50vh] md:h-[70vh] rounded-[1rem] flex flex-col items-center justify-between p-[1rem] shadow-xl relative text-black"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
      >
        <div
          className="absolute top-4 right-4 cursor-pointer text-white"
          onClick={setExpanded}
        >
          <UilTimes className="w-6 h-6" />
        </div>

        <span className="text-[26px] font-bold">{param.title}</span>

        <div className="w-[90%] md:w-[70%]">
          <Chart series={param.series} type="area" options={data.options} />
        </div>

        <span className="text-[16px] text-gray-700">Last Hours</span>
      </div>
    </motion.div>
  );
}

export default Card;
