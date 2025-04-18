import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";
import Chat from "./Chat";
import Controls from "./Controls";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { UpdatesData, CardsData, RecentSpendingsData } from "../../Data/Data";
import "./Chatbot.css";

const googleAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const gemini = googleAI.getGenerativeModel({
  model: "tunedModels/pally-casual-training-data-v230b6a78aru",
});
const chat = gemini.startChat({ history: [] });

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    // Create context from data
    const transactions = UpdatesData.map(
      (update) =>
        `Name: ${update.name}, Notification: ${update.noti} (Time: ${update.time})`,
    ).join("\n");

    const financialSummary = CardsData.map(
      (card) =>
        `Title: ${card.title}, Value: ₹${card.value} (Expected ₹${card.expectedValue}) Time: ${card.time}`,
    ).join("\n");

    const recentSpending = RecentSpendingsData.map(
      (recentSpending) =>
        `Description: ${recentSpending.description}, Category: ${recentSpending.category}, Amount: ${recentSpending.amount}, Payment Method: ${recentSpending.paymentMethod}, Status: ${recentSpending.status}, date: ${recentSpending.date}`,
    );

    const systemContext = `You are a financial assistant named Pally from PocketPal who analyzing dashboard data. Use this context:
  
Recent Transactions (last 3):
${transactions}

Financial Overview:
${financialSummary}

Guidelines:
1. Respond in friendly, and humorous tone
2. Format numbers with commas (₹1,200 instead of ₹1200)
3. Use bullet points for lists
4. Include emojis where appropriate
5. Bold important numbers using **bold** syntax
6. Separate sections with line breaks
7. Roast the user if they ask for a joke brutally 😂

Example response:
"Here's your financial overview 💰:
- **Total Savings**: ₹3,200 (80% of ₹4,000 goal)
- **Recent Expenses**: ₹1,200 this month

Recent transactions 🧾:
• Zomato: Biryani ₹200 (20 mins ago)
• Amazon: Headphones ₹500 (2 hrs ago)

Recent Spending: 
- Netflix Subscription: ₹649 by UPI"

Now respond to:`;

    addMessage({ role: "user", content });

    try {
      // Combine system context with user message
      const fullPrompt = `${systemContext}\n\nUser: ${content}`;

      const result = await chat.sendMessage(fullPrompt);
      addMessage({ role: "assistant", content: result.response.text() });
    } catch (error) {
      console.error("API Error:", error);
      addMessage({
        role: "system",
        content:
          "Sorry, I'm having trouble accessing the data. Please try again later.",
      });
    }
  }
  return (
    <>
      <motion.div
        className="fixed bottom-[4rem] right-[1rem] bg-[#6c5ce7] text-white rounded-[50%] w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer shadow-[0_0.5rem_1rem_rgba(0,0,0,0.2)] z-[1000] hover:bg-[#5e54d8]"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        title="Chat with Pally"
      >
        <IoChatbubbleEllipsesOutline size={32} />
      </motion.div>

      {isOpen && (
        <motion.div
          className="fixed bottom-[6rem] right-[1rem] w-[20rem] h-[28rem] pd-[2rem] bg-white shadow-[0_0.5rem_1rem_rgba(0,0,0,0.3) rounded-[0.5rem] flex flex-col z-[1001]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <div className="bg-[#6c5ce7] text-white p-[0.75rem] flex justify-between items-center text-[1rem] font-bold rounded-t-[0.5rem] rounded-b-none">
            <span>Chat with Pally</span>
            <IoClose
              size={24}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <Chat messages={messages} />
          <Controls onSend={handleContentSend} />
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
