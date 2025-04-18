import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Coffee,
  Users,
  Trophy,
  Medal,
  DollarSign,
  Calendar,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const BelowSection = () => {
  const [state, changeState] = useState("challenges");
  return (
    <div className="flex flex-col w-full gap-8 py-6">
      <div className="grid grid-cols-3 border rounded-lg border-gray-900 bg-transparent shadow-md p-1">
        <div
          className={`flex justify-center items-center rounded-lg cursor-pointer py-2 ${
            state === "challenges" ? "bg-black text-white" : ""
          }`}
          onClick={() => changeState("challenges")}
        >
          Challenges
        </div>
        <div
          className={`flex justify-center items-center rounded-lg cursor-pointer py-2 ${
            state === "achievement" ? "bg-black text-white" : ""
          }`}
          onClick={() => changeState("achievement")}
        >
          Achievement
        </div>
        <div
          className={`flex justify-center items-center rounded-lg cursor-pointer py-2 ${
            state === "goals" ? "bg-black text-white" : ""
          }`}
          onClick={() => changeState("goals")}
        >
          Savings Goals
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-[#3a3a3a] p-4 text-white rounded-lg">
        {state === "challenges" ? (
          <div>
            <h1 className="text-2xl font-bold">Active Challenges</h1>
            <p className="text-sm text-gray-300 mb-2">
              Complete challenges to earn rewards
            </p>
            <div className="flex flex-row justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start justify-start rounded-full bg-red-400 p-2 w-fit">
                  <Coffee />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Coffee Break Challenge</span>
                  <span className="text-sm text-gray-300">
                    Skip coffee shop visits for a week
                  </span>
                  <Progress
                    value={33}
                    className="bg-muted group [&>div]:bg-(--primary-color)"
                  />
                  <span className="text-sm text-gray-300">
                    3/7 days completed
                  </span>
                </div>
              </div>
              <Badge className="h-8 bg-(--primary-color) text-black">
                ₹10+50 XP
              </Badge>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start justify-start rounded-full bg-blue-400 p-2 w-fit">
                  <Users />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Group Savings Race</span>
                  <span className="text-sm text-gray-300">
                    Save more than your friends this month
                  </span>
                  <Progress
                    value={70}
                    className="bg-muted group [&>div]:bg-(--primary-color)"
                  />
                  <span className="text-sm text-gray-300">
                    3/7 days completed
                  </span>
                </div>
              </div>
              <Badge className="h-8 bg-(--primary-color) text-black">
                200 XP + Badge
              </Badge>
            </div>
            <Separator className="my-4" />
            <div>
              <h1 className="text-2xl font-bold">Challenge History</h1>
              <p className="text-sm text-gray-300 mb-2">
                Your completed challenges
              </p>
            </div>
            <div className="flex flex-row  justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start justify-start rounded-full bg-red-400 p-2 w-fit">
                  <Coffee />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">No-Spend Weekend</span>
                  <span className="text-sm text-gray-300">
                    Avoid all non-essential spending for a weekend
                  </span>
                </div>
              </div>
              <Badge className="h-8 bg-gray-300 text-black">₹15+75 XP</Badge>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start justify-start rounded-full bg-blue-400 p-2 w-fit">
                  <Users />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Lunch Prep Week</span>
                  <span className="text-sm text-gray-300">
                    Bring lunch from home every day for a week
                  </span>
                </div>
              </div>
              <Badge className="h-8 bg-gray-300 text-black">₹20+100 XP</Badge>
            </div>
            <div className="flex flex-row items-center justify-center my-4">
              <Button variant="outline" className="text-black w-[98%]">
                View All Challenges
              </Button>
            </div>
          </div>
        ) : state === "achievement" ? (
          <div className="gap-8">
            <h1 className="text-2xl font-bold">Achievements</h1>
            <p className="text-sm text-gray-300">
              Track your milestones and accomplishments
            </p>
            <div className="flex flex-row py-4 justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start text-black justify-start rounded-full bg-(--primary-color) p-2 w-fit">
                  <Trophy />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">Consistent Saver</span>
                  <span className="text-sm text-gray-300">
                    Top 25% of savers in your network
                  </span>
                </div>
              </div>
              <Badge className="h-8 bg-(--primary-color) text-black">
                Unlocked
              </Badge>
            </div>
            <div className="flex flex-col py-4 justify-between">
              <div className="flex flex-col justify-between">
                <div className="flex gap-4 items-start">
                  <span className="flex items-start text-black justify-start rounded-full bg-gray-200 p-2 w-fit">
                    <Medal />
                  </span>

                  <div className="flex flex-col w-full gap-2">
                    {" "}
                    {/* stack content vertically */}
                    <div className="flex flex-row w-full justify-between gap-1">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold">Budget Master</span>
                        <span className="text-sm text-gray-300">
                          Stay under budget for 3 consecutive months
                        </span>
                      </div>
                      <Badge className="h-8 bg-gray-300 text-black">
                        75% Complete
                      </Badge>
                    </div>
                    <Progress
                      value={75}
                      className="bg-muted [&>div]:bg-(--primary-color) block w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row py-4 justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start text-black justify-start rounded-full bg-(--primary-color) p-2 w-fit">
                  <DollarSign />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-bold">First Milestone</span>
                  <span className="text-sm text-gray-300">
                    Save your first ₹1000
                  </span>
                </div>
              </div>
              <Badge className="h-8 bg-(--primary-color) text-black">
                Unlocked
              </Badge>
            </div>
            <div className="flex flex-col  justify-between">
              <div className="flex flex-col py-4 justify-between">
                <div className="flex gap-4 items-start">
                  <span className="flex items-start text-black justify-start rounded-full bg-gray-200 p-2 w-fit">
                    <Calendar />
                  </span>

                  <div className="flex flex-col w-full gap-2">
                    {" "}
                    {/* stack content vertically */}
                    <div className="flex flex-row w-full justify-between gap-1">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold">30-Day Streak</span>
                        <span className="text-sm text-gray-300">
                          Log in to the app for 30 consecutive days
                        </span>
                      </div>
                      <Badge className="h-8 bg-gray-300 text-black">
                        20% Complete
                      </Badge>
                    </div>
                    <Progress
                      value={20}
                      className="bg-muted [&>div]:bg-purple-500 block w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4 gap-4 justify-between">
              <div className="flex flex-row justify-between">
                <span className="text-sm font-bold">Progress to Level 8</span>
                <span className="text-sm text-gray-300">65%</span>
              </div>
              <Progress
                value={65}
                className="bg-muted [&>div]:bg-purple-500 block w-full"
              />
              <div className="text-sm text-gray-300 justify-center items-center w-full flex">
                +12.5% from last month
              </div>
            </div>
          </div>
        ) : state === "goals" ? (
          <div className="gap-8">
            <h1 className="text-2xl font-bold">Your Savings Goals</h1>
            <p className="text-sm text-gray-300">
              Track your progress towards personal goals
            </p>

            <div className="flex flex-row py-4 justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start text-black justify-start rounded-full bg-green-400 p-2 w-fit">
                  <DollarSign />
                </span>
                <div className="flex flex-col gap-1 w-full">
                  <span className="font-bold">Buy Noise Smartwatch</span>
                  <span className="text-sm text-gray-300">Target: ₹4,000</span>
                  <Progress
                    value={60}
                    className="bg-muted [&>div]:bg-purple-500 block w-full"
                  />
                  <span className="text-sm text-gray-300">₹2,400 saved</span>
                </div>
              </div>
              <Badge className="h-8 bg-gray-300 text-black">60%</Badge>
            </div>

            <div className="flex flex-row py-4 justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start text-black justify-start rounded-full bg-yellow-400 p-2 w-fit">
                  <Trophy />
                </span>
                <div className="flex flex-col gap-1 w-full">
                  <span className="font-bold">Trip to Goa</span>
                  <span className="text-sm text-gray-300">Target: ₹10,000</span>
                  <Progress
                    value={25}
                    className="bg-muted [&>div]:bg-purple-500 block w-full"
                  />
                  <span className="text-sm text-gray-300">₹2,500 saved</span>
                </div>
              </div>
              <Badge className="h-8 bg-gray-300 text-black">25%</Badge>
            </div>

            <div className="flex flex-row py-4 justify-between">
              <div className="flex gap-4 items-start">
                <span className="flex items-start text-black justify-start rounded-full bg-blue-400 p-2 w-fit">
                  <Medal />
                </span>
                <div className="flex flex-col gap-1 w-full">
                  <span className="font-bold">Emergency Fund</span>
                  <span className="text-sm text-gray-300">Target: ₹5,000</span>
                  <Progress
                    value={90}
                    className="bg-muted [&>div]:bg-purple-500 block w-full"
                  />
                  <span className="text-sm text-gray-300">₹4,500 saved</span>
                </div>
              </div>
              <Badge className="h-8 bg-gray-300 text-black">Almost There</Badge>
            </div>

            <div className="flex flex-row items-center justify-center my-4">
              <Button variant="outline" className="text-black w-[98%]">
                Add New Goal
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BelowSection;
