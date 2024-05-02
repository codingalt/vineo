import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import css from "./Test.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Video from "./Video";
import v1 from "../../../../assets/videos/v1.mp4";
import v2 from "../../../../assets/videos/v2.mp4";
import v3 from "../../../../assets/videos/v3.mp4";

const Video1 = () => {

  return (
    <>
        <div className="video" id="videoItems">
          <div className="inner">
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              loop
              style={{ height: "100%" }}
            >
              <source src={v1} type="video/mp4" />
            </video>
          </div>
        </div>
    </>
  );
};

const Video2 = () => {

  return (
    <>
        <div className="video" id="videoItems">
          <div className="inner">
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              loop
              style={{ height: "100%" }}
            >
              <source src={v2} type="video/mp4" />
            </video>
          </div>
        </div>
    </>
  );
};

const Video3 = () => {
  return (
    <>
      <div className="video" id="videoItems">
        <div className="inner">
          <video
            width="100%"
            height="100%"
            controls
            autoPlay
            loop
            style={{ height: "100%" }}
          >
            <source src={v3} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

const variants = {
  enter: (direction) => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute",
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute",
    };
  },
};

const swipeConfidenceThreshold = 1000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const TestShorts = () => {
  const navigate = useNavigate();
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const nextPage = page + newDirection;
    if (nextPage >= 0 && nextPage <= 2) {
      setPage([nextPage, newDirection]);
    }
  };

  const renderData = [<Video1 />, <Video2 />, <Video3 />];

  const dataIndex = wrap(0, renderData.length, page);

  const handlePaginate = () => {};

  return (
    <>
      <div className="w-screen h-screen md:max-w-sm overflow-hidden flex justify-center items-center flex-col md:mx-auto">
        <div className={css.containerOnBoarding}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.y, velocity.y);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              style={{
                height: "100%",
                width: "100%",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              {renderData[dataIndex]}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </>
  );
};

export default TestShorts;
