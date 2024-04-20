import React, { useState } from 'react'
import css from "./HeartButton.module.scss"

const HeartButton = () => {
    const [liked, setLiked] = useState(false);

  return (
    // <div className={css.stage} onClick={() => setLiked(!liked)}>
    //   <div className={liked ? `${css.heart} ${css.isActive}` : `${css.heart}`}></div>
    // </div>
    <>
      <div className='h-[40px] w-7 flex items-center justify-center'>
      <input id="toggle-heart" type="checkbox" />
      <label htmlFor="toggle-heart">❤</label>
      </div>
    </>
  );
}

export default HeartButton