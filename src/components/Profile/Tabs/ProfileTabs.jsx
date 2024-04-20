import React, { useState } from 'react'
import grid from "../../../assets/grid.png";
import video from "../../../assets/video.png";
import css from "./ProfileTabs.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Posts from '../Posts/Posts';
import { LuLayoutGrid } from "react-icons/lu";
import { PiVideoLight } from "react-icons/pi";
import { RxVideo } from "react-icons/rx";

const tabs = [
  {
    name: "tab1",
    label: <LuLayoutGrid />,
    render: () => {
      return <Posts />;
    },
  },
  {
    name: "tab2",
    label: <PiVideoLight fontSize={35} />,
    render: () => {
      return (
        <p className="mt-20 text-center max-w-[85%] mx-auto text-tiny">
          Videos Section
        </p>
      );
    },
  },
];

const tabContentVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};

const ProfileTabs = () => {
  	const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleClick = (e, tab) => {
      e.preventDefault();

      setActiveTab(tab);
    };

    const isSelected = (tab) => activeTab.name === tab.name;

  return (
    <div className={css.tabWrapper}>
      <div className={css.tabHeader}>
        {tabs?.map((tab) => (
          <div
            key={tab.name}
            className={[css.tabItem, isSelected(tab) ? css.selected : ""].join(
              " "
            )}
            onClick={(e) => handleClick(e, tab)}
          >
            {/* <img src={tab.label} alt="" /> */}
            <div
              className={`text-[32px] transition-all ${css.icon} ${
                isSelected(tab) ? "text-white" : "text-[#7B7B7B]"
              }`}
            >
              {tab.label}
            </div>

            {isSelected(tab) && (
              <motion.div layoutId="indicator" className={css.indicator} />
            )}
          </div>
        ))}
      </div>

      <div className={css.tabContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.name || "empty"}
            variants={tabContentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
          >
            {activeTab && activeTab?.render()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProfileTabs