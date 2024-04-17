import React from "react";
import css from "./UserProfile.module.scss";
import banner from "../../../assets/banner.png"
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../../assets/profile.png"
// import { FaPlus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Tab, Tabs } from "@nextui-org/react";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import grid from "../../../assets/grid.png"
import video from "../../../assets/video.png";
import Posts from "../Posts/Posts";
import ProfileTabs from "./ProfileTabs";

const UserProfile = () => {
  return (
    <div className="w-screen h-screen max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col mx-auto">
      <div className={css.container}>
        {/* Cover photo  */}
        <div className={css.banner}>
          <img src={banner} alt="" />

          <div className={css.menuIcons}>
            <div className={css.left}>
              <IoIosArrowBack fontSize={26} />
            </div>
            <div className={css.right}>
              <FiSearch />
              <FaBars />
            </div>
          </div>
        </div>

        {/* Profile pci  */}
        <div className={css.profileWrap}>
          <div className={css.profile}>
            <img src={profile} alt="" />
            <div className={css.plus}>
              <FaPlus />
            </div>
          </div>
          <div className={css.name}>
            <p>Ava Skyler</p>
            <span>@Ava_Skyler</span>
          </div>
        </div>

        {/* Likes | Subscribers | Rating  */}
        <div className={css.likes}>
          <div className={css.item}>
            <p>1,234</p>
            <span>Likes</span>
          </div>
          <div className={css.item}>
            <p>5,678</p>
            <span>Subscribers</span>
          </div>
          <div className={css.item}>
            <p>5.5</p>
            <span>Rating</span>
          </div>
        </div>

        {/* Profile Bio  */}
        <div className={css.profileBio}>
          <span>
            Fashion lover 👗 | Foodie at heart 🍕 | Fitness enthusiast 💪 |
            Living life one day at a time 🌈 | Dream big, work hard, stay
            focused ✨ #hashtag
          </span>
        </div>

        {/* Buttons | Edit Profile | Share Profile  */}
        <div className={css.profileBtns}>
          <button>Edit Profile</button>
          <button>Share Profile</button>
        </div>

        {/* Tabs  */}
        <ProfileTabs />
        <div className={css.tabs}>
          <div className={css.tab}>
            <img src={grid} alt="" />
          </div>
          <div className={css.tab}>
            <img src={video} alt="" />
          </div>
          {/* <Tabs
              color="primary"
              variant="underlined"
              aria-label="Tabs variants"
              style={{width:"100%"}}
            >
              <Tab
                key="photos"
                title={
                  <div className="flex items-center space-x-2">
                    <img src={grid} alt="" />
                  </div>
                }
              />
              <Tab
                key="videos"
                title={
                  <div className="flex items-center space-x-2">
                    <img src={video} alt="" />
                  </div>
                }
              />
            </Tabs> */}
        </div>

        {/* Posts  */}
        <Posts />
      </div>
    </div>
  );
};

export default UserProfile;
