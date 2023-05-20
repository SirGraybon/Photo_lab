import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {

  const { favList, setFavList, id, setisFavPhotoExist } = props;



  const handleClick = function() {
    
    if (!favList.includes(id)) {
      setFavList(favList => [...favList, id]);
    } else {
      setFavList(favList.filter(ids => ids !== id));
    }

    /////this
    if ([...favList].length > 0) {
      setisFavPhotoExist(true)
    };
  }

  let fav = false;



  if (favList.includes(id)) {
    fav = true;
  }


  return (
    <div onClick={handleClick} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={fav ? "#C80000" : "#EEEEEE"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;