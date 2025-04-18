import React from "react";
import "./Cards.css";
import { CardsData } from "../../Data/Data.js";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-4 xl:flex-nowrap">
      {CardsData.map((card, id) => {
        return (
          <div className="w-[100%]">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              time={card.time}
              expectedValue={card.expectedValue}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
