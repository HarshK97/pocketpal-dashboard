import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const LoginPage = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      onLogin();
      setLoading(false);
    }, 2000); // 2 seconds loading simulation
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 500 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col justify-center items-center w-full min-h-screen p-4"
    >
      <div className="bg-(--primary-color) flex flex-col md:flex-row justify-center items-start shadow-lg rounded-lg w-full max-w-4xl text-black">
        {/* Left side - Form */}
        <div className="flex flex-col justify-start items-center w-full md:w-[55%] p-6 rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg">
          <div className="flex flex-col justify-center items-center pt-4">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <span className="text-zinc-600 text-sm text-center">
              Login to your PocketPal account
            </span>
          </div>

          <div className="flex flex-col mt-5 gap-2 w-full">
            <label className="text-sm">Email</label>
            <Input
              type="email"
              placeholder="m@example.com"
              className="placeholder:text-zinc-600 border border-gray-600 rounded-md focus:ring-0 focus:border-gray-600 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-5 gap-2 w-full">
            <div className="flex justify-between items-center">
              <label className="text-sm">Password</label>
              <a
                href="#"
                className="text-sm text-zinc-900 underline hover:text-zinc-600 focus:ring-0 focus:border-gray-600 focus:outline-none"
              >
                Forgot password?
              </a>
            </div>
            <Input
              type="password"
              className="border border-gray-600 rounded-md"
            />
          </div>

          <div className="w-full mt-6">
            <Button
              className="w-full bg-black text-white hover:bg-zinc-900 cursor-pointer active:scale-95 transition"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin w-4 h-4" />
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </div>

          <div className="flex text-black items-center w-full mt-6">
            <div className="flex-grow border-t border-gray-600" />
            <span className="px-3 text-sm text-gray-900">Or continue with</span>
            <div className="flex-grow border-t border-gray-600" />
          </div>

          <div className="flex gap-4 justify-center mt-4">
            <Button
              variant="outline"
              size="icon"
              className="border border-gray-600 text-white bg-black hover:bg-gray-800 hover:text-white cursor-pointer"
            >
              <FontAwesomeIcon icon={faApple} size="lg" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border border-gray-600 text-white bg-black hover:bg-gray-800 hover:text-white cursor-pointer"
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border border-gray-600 text-white bg-black hover:bg-gray-800 hover:text-white cursor-pointer"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </Button>
          </div>

          <p className="text-sm mt-5 text-center">
            Don't have an account?{" "}
            <a href="#" className="underline hover:text-zinc-600">
              Sign up
            </a>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:flex bg-zinc-900 h-120 justify-center items-center w-[45%] rounded-br-lg rounded-tr-lg p-6">
          <img
            src="character.png"
            alt="character"
            className="max-w-[90%] h-auto object-contain"
          />
        </div>
      </div>

      <span className="text-sm text-zinc-400 mt-5 text-center max-2w-md">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline hover:text-zinc-200">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-zinc-200">
          Privacy Policy
        </a>
        .
      </span>
    </motion.div>
  );
};

export default LoginPage;
