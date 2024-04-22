import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import css from "./Onboarding.module.scss";
import EnterName from "./EnterName";
import UploadPicture from "./UploadPicture";
import SetRate from "./SetRate";
import playBtn from "../../assets/play-button.svg";
import GetStarted from "./GetStarted";
import { useNavigate } from "react-router-dom";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute",
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute",
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const renderData = [
  <GetStarted />,
  <EnterName />,
  <UploadPicture />,
  <SetRate />,
];

const OnboardingSwiper = () => {
  const navigate = useNavigate();
  const [[page, direction], setPage] = useState([0, 0]);

  const dataIndex = wrap(0, renderData.length, page);

  const paginate = (newDirection) => {
    const nextPage = page + newDirection;
    if (nextPage >= 0 && nextPage <= 3) {
      setPage([nextPage, newDirection]);
    }
  };

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
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {renderData[dataIndex]}
            </motion.div>
          </AnimatePresence>

          <div className="z-10 flex w-full absolute left-0 right-0 bottom-48 space-x-2 items-center justify-center mx-auto mb-5 mt-36">
            {Array(4)
              .fill(null)
              .map((item, index) =>
                page === index ? (
                  <div
                    key={index}
                    className="w-[20px] h-[8px] bg-[#3632FF] rounded-full cursor-pointer transition-all"
                  ></div>
                ) : (
                  <div
                    key={index}
                    onClick={() => paginate(index - page)}
                    className="w-[7px] h-[8px] bg-white rounded-full cursor-pointer transition-all"
                  ></div>
                )
              )}
          </div>

          {page === 0 && (
            <button
              onClick={() => paginate(1)}
              disabled={page === 4 - 1}
              className={css.getStartedBtn}
            >
              Get Started
            </button>
          )}

          {(page === 1 || page === 2) && (
            <div className={css.skipNextBtns}>
              <button onClick={() => paginate(1)} className={css.skip}>
                Skip
              </button>
              <button onClick={() => paginate(1)} className={css.next}>
                <img src={playBtn} alt="" />
              </button>
            </div>
          )}

          {page === 3 && (
            <button
              onClick={() => navigate("/getStarted")}
              className={css.getStartedBtn}
            >
              Finsih
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default OnboardingSwiper;
