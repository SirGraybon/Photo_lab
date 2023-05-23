import React, { useCallback, useState } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {

  const { favList, id, dispatch } = props;

  let fav = (favList.includes(id));
  return (
    <div onClick={() => dispatch({ type: "toggleFav", id })} className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={fav ? "#C80000" : "#EEEEEE"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;