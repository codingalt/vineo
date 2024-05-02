import React, { useState } from 'react'
import css from "./SearchCreators.module.scss";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import TopCreators from './TopCreators';
import SearchResults from './SearchResults';
import BottomResults from './BottomResults';
import { useGetTop20CreatorsQuery, useSearchCreatorsQuery } from '../../services/api/creatorsApi/creatorsApi';
import { ClipLoader } from 'react-spinners';

const SearchCreators = () => {
    const navigate = useNavigate();
     const [searchText, setSearchText] = useState("");
     const {data,isFetching} = useSearchCreatorsQuery(searchText,{skip: searchText.length === 0})

    //  Get top 20 creators 
    const { data: topCreators, isLoading: isLoadingTopCreators } = useGetTop20CreatorsQuery();
    console.log(topCreators);

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

      {/* Show Loader fetching search results */}
      {isLoadingTopCreators ? (
        <div className="h-[400px] w-full flex items-center justify-center">
          <ClipLoader color="#3632FF" size={38} speedMultiplier={0.94} />
        </div>
      ) : (
        <>
          {/* Top Creators  */}
          {searchText.length === 0 && <TopCreators data={topCreators} />}

          {/* Bottom Results  */}
          {searchText.length === 0 && (
            <BottomResults data={topCreators} searchText={searchText} />
          )}
        </>
      )}

      {/* Show Loader Fetching Top Creators  */}
      {isFetching && (
        <div className="h-[250px] w-full flex items-center justify-center">
          <ClipLoader color="#3632FF" size={38} speedMultiplier={0.94} />
        </div>
      )}

      {/* Empty Data  */}
      {!isFetching && data?.users?.length === 0 && (
        <div className="h-[100px] w-full flex items-center justify-center">
          <p className="text-white text-sm font-medium">No Result found!</p>
        </div>
      )}

      {/* Search Results  */}
      {!isFetching && searchText.length > 0 && (
        <SearchResults data={data?.users} isFetching={isFetching} />
      )}
    </div>
  );
}

export default SearchCreators