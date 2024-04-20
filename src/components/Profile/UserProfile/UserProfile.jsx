import React from "react";
import css from "./UserProfile.module.scss";
import banner from "../../../assets/banner.png"
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../../assets/profile.png"
import { FaPlus } from "react-icons/fa";
import ProfileTabs from "../Tabs/ProfileTabs";
import UploadFromGallery from "../UploadFromGallery/UploadFromGallery";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col mx-auto">
      <div className={css.container}>
        {/* Cover photo  */}
        <div className={css.banner}>
          <Image src={banner} alt="" radius="none" width={"100%"} height={156} className="z-0" />

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

        {/* Profile pic  */}
        <div className={css.profileWrap}>
          <div className={css.profile}>
            <Image src={profile} alt="" radius="full" width={"100%"} height={90} className="z-0" />
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
          <button onClick={() => navigate("/videos/0")}>Edit Profile</button>
          <button>Share Profile</button>
        </div>

        {/* Tabs  */}
        <ProfileTabs />

        {/* Upload From Gallery  */}
        <UploadFromGallery />
      </div>
    </div>
  );
};

export default UserProfile;
