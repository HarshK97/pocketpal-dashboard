import ReactMarkdown from "react-markdown";
import { useEffect, useRef, useState } from "react";
import "./Chat.css";

const WELCOME_MESSAGE = {
  role: "assistant",
  content: `🤑 **Hey there! Welcome to PocketPal** 🎒💰  
I’m **Pally**, your personal finance buddy! I can help you  
Just ask me anything about money, savings, or spending, and I’ve got you! 🚀🔥`,
};

export function Chat({ messages }) {
  const chatRef = useRef(null);
  const [state, setState] = useState("/normal_state.png");

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === "user") {
        setState("/thinking_state.png"); // AI is "thinking"
      } else {
        setState("/normal_state.png"); // AI has responded
      }
    }
  }, [messages]);

  useEffect(() => {
    if (chatRef.current) {
      const lastMessage = chatRef.current.lastElementChild;
      if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [messages]);

  return (
    <div className="relative flex flex-col h-[90%] w-full bg-white dark:bg-[#1e1e1e] text-black dark:text-white transition-colors duration-300 ease-in-out">
      <div
        ref={chatRef}
        className="flex-1 flex flex-col gap-3 p-4 overflow-y-auto pb-[100px]"
      >
        {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              role === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`text-xs mb-1 font-medium ${
                role === "user"
                  ? "text-right text-gray-500"
                  : "text-left text-indigo-500"
              }`}
            >
              {role === "user" ? "You" : "Pally"}
            </div>
            <div
              className={`max-w-[80%] px-4 py-2 rounded-lg text-sm whitespace-pre-line break-words
              ${
                role === "user"
                  ? "bg-indigo-100 text-black dark:bg-indigo-600 dark:text-white self-end"
                  : "bg-gray-100 text-black dark:bg-gray-800 dark:text-white self-start"
              }`}
            >
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>

      <img
        src={state}
        alt="Pally"
        className="absolute bottom-0 left-0 w-[120px] h-auto pointer-events-none z-[10]"
      />
    </div>
  );
}

export default Chat;
