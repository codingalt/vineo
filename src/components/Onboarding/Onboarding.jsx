import React, { useState } from "react";
import css from "./Onboarding.module.scss";
import logo from "../../assets/logo.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import EnterName from "./EnterName";
import UploadPicture from "./UploadPicture";
import SetRate from "./SetRate";
import playBtn from "../../assets/play-button.png";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const Onboarding = () => {
  const [slide, setSlide] = useState(0);
  console.log(slide);

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <div className="w-[20px] h-[8px] bg-[#3632FF] rounded-full cursor-pointer"></div>
    ) : (
      <div className="w-[7px] h-[8px] ml-1 mr-1 bg-white rounded-full cursor-pointer"></div>
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center flex-col">
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        disableButtonsControls
        renderDotsItem={renderDotsItem}
        // onSlideChanged={(e) => setSlide(slide < 3 ? e.item + 1 : e.item)}
        onSlideChanged={(e) => {
          const totalSlides = 4; // Assuming you have 4 slides
          const currentSlide = e.item % totalSlides;
          setSlide(currentSlide);
        }}
        autoPlay={false}
        swipeDelta={2}
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
      </AliceCarousel>
      {/* {slide === 0 && (
        <button className={css.getStartedBtn}>Get Started</button>
      )} */}
{/* <p>{slide}</p> */}

      {/* {(slide != 0 || slide != 3) && (
        <div className={css.skipNextBtns}>
          <button className={css.skip}>Skip</button>
          <button className={css.next}>
            <img src={playBtn} alt="" />
          </button>
        </div>
      )} */}

      {/* {slide === 3 && <button className={css.getStartedBtn}>Finsih</button>} */}
    </div>
  );
};

export default Onboarding;
