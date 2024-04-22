import React from 'react'
import css from "./SearchCreators.module.scss";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import TopCreators from './TopCreators';

const SearchCreators = () => {
    const navigate = useNavigate();

  return (
    <div className={`${css.wrapper} md:max-w-sm md:mx-auto`}>
      <header>
        <div className={css.searchBox}>
          <IoSearch />
          <input type="text" placeholder="Search for creators" />
        </div>
        <button type='button' onClick={() => navigate(-1)}>Cancel</button>
      </header>

      {/* Top Creators  */}
      {/* <TopCreators /> */}
    </div>
  );
}

export default SearchCreators