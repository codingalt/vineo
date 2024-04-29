import React, { useState } from "react";
import css from "./Profile.module.scss";
import { FaPlus } from "react-icons/fa";
import ProfileTabs from "../Tabs/ProfileTabs";
import { useNavigate, useParams } from "react-router-dom";
import CoverPhoto from "./CoverPhoto";
import ProfilePicture from "./ProfilePicture";
import { useGetCreatorProfileQuery } from "../../../services/api/creatorsApi/creatorsApi";
import { NumericFormat } from "react-number-format";
import { ClipLoader } from "react-spinners";
import ShareProfileModal from "../../Profile/Modals/ShareProfileModal/ShareProfileModal";
import BurgerMenuModal from "../../Profile/Modals/BurgerMenuModal/BurgerMenuModal";
import LogoutModal from "../../Profile/Modals/LogoutModal/LogoutModal";

const CreatorProfile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [isShareProfileModal, setIsShareProfileModal] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);

  const {
    data,
    isFetching: isLoading,
    error,
  } = useGetCreatorProfileQuery(username);

  return (
    <div className="w-screen h-screen md:max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col md:mx-auto">
      <div className={css.container}>
        {/* Cover photo  */}
        <CoverPhoto
          data={data}
          isLoading={isLoading}
          setIsBurgerMenu={setIsBurgerMenu}
        />

        {/* Profile pic  */}
        <ProfilePicture data={data} isLoading={isLoading} />

        {/* Loading Content Loader  */}
        {isLoading && (
          <div className="w-full h-[48px] flex items-center justify-center">
            <ClipLoader color="#3632FF" size={30} speedMultiplier={0.95} />
          </div>
        )}

        {/* Likes | Subscribers | Rating  */}
        <div className={css.likes}>
          <div className={css.item}>
            <p>{data?.likes}</p>
            <span>{data && "Likes"}</span>
          </div>
          <div className={css.item}>
            <p>{data?.followers}</p>
            <span>{data && "Subscribers"}</span>
          </div>
          <div className={css.item}>
            {isLoading ? (
              <p></p>
            ) : data?.user?.rating ? (
              data?.user?.rating
            ) : (
              "0"
            )}
            <span>{data && "Rating"}</span>
          </div>
        </div>

        {/* Profile Bio  */}
        <div className={css.profileBio}>
          {data?.user?.description ? (
            <span>{data?.user?.description}</span>
          ) : (
            !isLoading && <span></span>
          )}
        </div>

        {/* Buttons | Subscribe | Unsubscribe | Share Profile  */}
        <div className={css.profileBtns}>
          {
            <>
              {data?.isSubscribed ? (
                <button>Unsubscribe</button>
              ) : (
                <button className={css.subscribeBtn}>
                  <p>Subscribe</p>
                  <span>
                    <NumericFormat
                      displayType="text"
                      value={data?.user?.rate}
                      thousandSeparator=","
                      thousandsGroupStyle="lakh"
                    />
                    /month
                  </span>
                </button>
              )}

              <button onClick={() => setIsShareProfileModal(true)}>
                Share Profile
              </button>
            </>
          }
        </div>

        {/* Tabs  */}
        <ProfileTabs
          data={data?.user?.posts}
          isLoading={isLoading}
          isSubscribed={data?.isSubscribed}
        />

        {/* Burger Menu Modal  */}
        <BurgerMenuModal
          isBurgerMenu={isBurgerMenu}
          setIsBurgerMenu={setIsBurgerMenu}
          setIsLogoutModal={setIsLogoutModal}
        />

        {/* Share Profile Modal  */}
        <ShareProfileModal
          isShareProfileModal={isShareProfileModal}
          setIsShareProfileModal={setIsShareProfileModal}
          username={data?.user?.username}
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

export default CreatorProfile;
