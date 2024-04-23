import React, { useState } from "react";
import css from "./UserProfile.module.scss";
import banner from "../../../assets/banner.png"
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../../assets/profile.png"
import { FaPlus } from "react-icons/fa";
import ProfileTabs from "../Tabs/ProfileTabs";
import UploadFromGallery from "../Modals/UploadFromGallery/UploadFromGallery";
import { useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";
import ImageComponent from "../../ui/Image/ImagePostsComponent";
import ImageProfileComponent from "../../ui/Image/ImageProfileComponent";
import BurgerMenuModal from "../Modals/BurgerMenuModal/BurgerMenuModal";
import LogoutModal from "../Modals/LogoutModal/LogoutModal";

const UserProfile = () => {
  const navigate = useNavigate();
  const [isBurgerMenu,setIsBurgerMenu] = useState(false);
  const [isLogoutModal,setIsLogoutModal] = useState(false);

  return (
    <div className="w-screen h-screen md:max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col md:mx-auto">
      <div className={css.container}>
        {/* Cover photo  */}
        <div className={css.banner}>
          <ImageComponent
            src={banner}
            alt=""
            radius="none"
            width={"100%"}
            height={156}
            className="z-0"
          />

          <div className={css.menuIcons}>
            <div className={css.left}>
              <IoIosArrowBack fontSize={26} />
            </div>
            <div className={css.right}>
              <FiSearch onClick={() => navigate("/search/creators")} />
              <FaBars onClick={() => setIsBurgerMenu(true)} />
            </div>
          </div>
        </div>

        {/* Profile pic  */}
        <div className={css.profileWrap}>
          <div className={css.profile}>
            <ImageProfileComponent
              src={profile}
              alt=""
              radius="full"
              width={"100%"}
              height={90}
              className="rounded-full"
            />
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

        {/* Burger Menu Modal  */}
        <BurgerMenuModal
          isBurgerMenu={isBurgerMenu}
          setIsBurgerMenu={setIsBurgerMenu}
          setIsLogoutModal={setIsLogoutModal}
        />

        {/* Logout Modal  */}
        <LogoutModal
          isLogoutModal={isLogoutModal}
          setIsLogoutModal={setIsLogoutModal}
        />
      </div>
    </div>
  );
};

export default UserProfile;
