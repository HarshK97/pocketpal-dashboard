import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import MainDash from "./components/Main Dash/MainDash";
import RightSide from "./components/RightSide/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import "@/lib/fontawesome";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-zinc-800 scrollbar-hidden">
      <AnimatePresence mode="wait" className="scrollbar-hidden">
        {!isLoggedIn && (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 500 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex justify-center items-center w-full min-h-screen bg-zinc-800 text-white"
          >
            <LoginPage onLogin={() => setIsLoggedIn(true)} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {" "}
        {isLoggedIn && (
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -500 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="overflow-y-auto h-full w-full flex flex-col fixed justify-center items-center scrollbar-hidden bg-(--primary-color) p-4 pt-160"
          >
            <TopBar />
            <div className="flex flex-row w-full pt-4">
              <MainDash className="col-span-1 sm:col-span-1 lg:col-span-1" />
              <div className="lg:block">
                <RightSide />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
