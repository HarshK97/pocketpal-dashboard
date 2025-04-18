// Sidebar imports
import {
  UilClipboardAlt,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

export const CardsData = [
  {
    title: "Total Savings",
    color: {
      backGround: "#E0B0FF",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "3200",
    expectedValue: "4000",
    png: UilUsdSquare,
    series: [
      {
        name: "Total Savings",
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
    time: "3 Months",
  },
  {
    title: "Expenses",
    color: {
      backGround: "#F66267",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "1200",
    expectedValue: "1500",
    png: UilMoneyWithdrawal,
    time: "This Month",
    series: [
      {
        name: "Expenses",
        data: [200, 1000, 20, 30, 100],
      },
    ],
  },
  {
    title: "Savings",
    color: {
      backGround:
        "linear-gradient(rgb(248,212,154) -146.42%, rgb(255 ,202, 113) -46.42%",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "500",
    expectedValue: "700",
    png: UilClipboardAlt,
    time: "This Month",
    series: [
      {
        name: "Savings",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdatesData = [
  {
    name: "Zomato",
    noti: "Ordered Biryani for ₹200",
    time: "20 minutes ago",
  },
  {
    name: "Amazon",
    noti: "Purchased Bluetooth headphones for ₹500",
    time: "2 hours ago",
  },
  {
    name: "Netflix",
    noti: "Subscription renewed for ₹649",
    time: "1 day ago",
  },
];
export const RecentSpendingsData = [
  {
    description: "Zomato Order",
    category: "Food",
    amount: 200,
    paymentMethod: "UPI",
    date: "2021-10-10",
    status: "Completed",
  },
  {
    description: "Amazon Order",
    category: "Shopping",
    amount: 500,
    paymentMethod: "Debit Card",
    date: "2021-10-11",
    status: "Completed",
  },
  {
    description: "Netflix Subscription",
    category: "Entertainment",
    amount: 649,
    paymentMethod: "UPI",
    date: "2021-10-12",
    status: "Completed",
  },
  {
    description: "Electricity Bill",
    category: "Bills",
    amount: 1000,
    paymentMethod: "Net Banking",
    date: "2021-10-13",
    status: "Completed",
  },
  {
    description: "Phone Bill",
    category: "Bills",
    amount: 500,
    paymentMethod: "Net Banking",
    date: "2021-10-14",
    status: "Completed",
  },
];
