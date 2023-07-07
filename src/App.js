import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import gridIcon from "./gridh.svg";

import gridIcon2 from "./gridv.svg";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function App() {
  const [layout, setLayout] = useState("compact");
  const controls = useAnimation();

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-black",
    "bg-pink-800",
  ];
  const variants = {
    initial: { opacity: 0 },
    open: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const toggleLayout = async () => {
    if (layout === "compact") {
      await controls.start({ opacity: 0 });
      setLayout("grid");
    } else {
      setLayout("compact");
      await controls.start({ opacity: 1 });
    }
  };
  return (
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 ">
      <div className=" h-screen py-[20px] flex  flex-col max-w-3xl mx-auto ">
        <h1
          className="text-white font-bold text-3xl text-center
      font-sans
      "
        >
          Moveable cards with framer motion & react-spring and react-use-gesture
        </h1>

        <div class="control self-end flex space-x-8 bg-white rounded-3xl p-2 shadow-xl ">
          {layout === "compact" ? (
            <img
              src={gridIcon}
              alt="logo"
              className="cursor-pointer w-[25px] h-[25px]"
              onClick={() => toggleLayout()}
            />
          ) : (
            <img
              src={gridIcon2}
              alt="logo"
              className="cursor-pointer w-[25px] h-[25px]"
              onClick={() => toggleLayout()}
            />
          )}
        </div>

        {layout === "compact" ? (

            <div
              class="grid grid-cols-3 gap-9 py-10 mx-auto"
              initial={{ opacity: 0 }}
              animate={controls}
            >
              {[...Array(6)].map((item, index) => {
                const colorClass = colors[index % colors.length];
                return (
                  <motion.div
                    key={index}
                    drag
                    initial="initial"
                    animate="open"
                    exit="exit"
                    variants={variants}
                    className={`lg:h-48 lg:w-48  w-24 h-24  shadow-xl rounded-xl
            
              ${colorClass}`}
                  ></motion.div>
                );
              })}
            </div>

        ) : (

            <div class="grid grid-cols-2 gap-9 py-10 mx-auto">
              {[...Array(6)].map((item, index) => {
                const colorClass = colors[index % colors.length];
                return (
                  <motion.div
                    key={index}
                    drag
                    initial="initial"
                    animate="open"
                    exit="exit"
                    variants={variants}
                    className={`lg:h-48 lg:w-48  w-24 h-24  shadow-xl rounded-xl
      
        ${colorClass}`}
                  ></motion.div>
                );
              })}
            </div>

        )}
      </div>
    </div>
  );
}

export default App;
