import React, { useState } from "react";
import css from "./Onboarding.module.scss";
import logo from "../../assets/logo.png";
import EnterName from "./EnterName";
import UploadPicture from "./UploadPicture";
import SetRate from "./SetRate";
import playBtn from "../../assets/play-button.png";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views-react-18-fix";

const OnboardingSwiper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 4;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="w-screen h-screen max-w-sm overflow-hidden flex justify-center items-center flex-col">
      <div className={css.containerOnBoarding}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {/* First Screen  */}
          <div className={css.wrapper}>
            <div className={css.logo}>
              <img src={logo} alt="" />
            </div>

            <div className={css.content}>
              <p>Set Up Your Profile</p>
              <span>
                Personalize your experience by creating a profile. Share your
                interests, add a photo, and let others get to know the real you.
              </span>
            </div>
          </div>

          {/* Second Screen  */}
          <EnterName />

          {/* Third Screen  */}
          <UploadPicture />

          {/* Fourth Screen  */}
          <SetRate />
        </SwipeableViews>

        <div className="flex w-full space-x-2 items-center justify-center mx-auto mb-5 mt-36">
          {Array(4)
            .fill(null)
            .map((item, index) =>
              activeStep === index ? (
                <div
                  key={index}
                  className="w-[20px] h-[8px] bg-[#3632FF] rounded-full cursor-pointer transition-all"
                ></div>
              ) : (
                <div
                  key={index}
                  onClick={() => handleStepChange(index)}
                  className="w-[7px] h-[8px] bg-white rounded-full cursor-pointer transition-all"
                ></div>
              )
            )}
        </div>

        {activeStep === 0 && (
          <button
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className={css.getStartedBtn}
          >
            Get Started
          </button>
        )}

        {(activeStep === 1 || activeStep === 2) && (
          <div className={css.skipNextBtns}>
            <button onClick={handleNext} className={css.skip}>
              Skip
            </button>
            <button onClick={handleNext} className={css.next}>
              <img src={playBtn} alt="" />
            </button>
          </div>
        )}

        {activeStep === 3 && (
          <button className={css.getStartedBtn}>Finsih</button>
        )}
      </div>
    </div>
  );
};

export default OnboardingSwiper;
