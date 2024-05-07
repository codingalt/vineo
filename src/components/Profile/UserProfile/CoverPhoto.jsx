import React, { useState } from "react";
import ImageComponent from "../../ui/Image/ImagePostsComponent";
import CoverPhotoSkeleton from "../Skeletons/CoverPhotoSkeleton";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import css from "./UserProfile.module.scss";
import { CiEdit } from "react-icons/ci";
import UploadCoverPhoto from "../Modals/UploadCoverPhoto/UploadCoverPhotoModal";

const CoverPhoto = ({ data, isLoading, setIsBurgerMenu }) => {
  const navigate = useNavigate();
  const [isUploadCoverModal, setIsUploadCoverModal] = useState(false);

  return (
    <>
      {/* Select Cover Photo Modal  */}
      <UploadCoverPhoto
        isUploadCoverModal={isUploadCoverModal}
        setIsUploadCoverModal={setIsUploadCoverModal}
        isLoadingData={isLoading}
      />
      <div className={css.banner}>
        {isLoading ? (
          <CoverPhotoSkeleton />
        ) : (
          <ImageComponent
            src={import.meta.env.VITE_COVER_PHOTO + data?.user?.cover_photo}
            alt=""
            radius="none"
            width={"100%"}
            height={156}
            className="z-0"
          />
        )}

        <div
          className={css.editCover}
          onClick={() => setIsUploadCoverModal(true)}
        >
          <CiEdit />
        </div>

        <div className={css.menuIcons}>
          <div className={css.left}>
            {/* <IoIosArrowBack fontSize={26} />  */}
          </div>
          <div className={css.right}>
            <FiSearch onClick={() => navigate("/search/creators")} />
            <FaBars onClick={() => setIsBurgerMenu(true)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPhoto;
