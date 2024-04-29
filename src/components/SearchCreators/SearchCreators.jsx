import React, { useState } from 'react'
import css from "./SearchCreators.module.scss";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import TopCreators from './TopCreators';
import SearchResults from './SearchResults';
import BottomResults from './BottomResults';
import { useSearchCreatorsQuery } from '../../services/api/creatorsApi/creatorsApi';
import { ClipLoader } from 'react-spinners';

const SearchCreators = () => {
    const navigate = useNavigate();
     const [searchText, setSearchText] = useState("");
     const {data,isFetching} = useSearchCreatorsQuery(searchText,{skip: searchText.length === 0})

  return (
    <div className={`${css.wrapper} md:max-w-sm md:mx-auto`}>
      <header>
        <div className={css.searchBox}>
          <IoSearch />
          <input
            type="text"
            maxLength={70}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for creators"
          />
        </div>
        <button type="button" onClick={() => navigate("/profile")}>
          Cancel
        </button>
      </header>

      {/* Top Creators  */}
      {searchText.length === 0 && <TopCreators />}

      {/* Bottom Results  */}
      {searchText.length === 0 && <BottomResults searchText={searchText} />}

      {/* Show Loader  */}
      {isFetching && (
        <div className="h-[380px] w-full flex items-center justify-center">
          <ClipLoader color="#3632FF" size={38} speedMultiplier={0.94} />
        </div>
      )}

      {/* Empty Data  */}
      {!isFetching && data?.users?.length === 0 && (
        <div className="h-[400px] w-full flex items-center justify-center">
          <p className='text-white text-sm font-medium'>No Result found!</p>
        </div>
      )}

      {/* Search Results  */}
      {!isFetching && searchText.length > 0 && (
        <SearchResults
          data={data?.users}
          isFetching={isFetching}
        />
      )}
    </div>
  );
}

export default SearchCreators