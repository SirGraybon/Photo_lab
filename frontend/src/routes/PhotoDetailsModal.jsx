import React from 'react';
import { useState } from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {

  const handleClick = function() {
    console.log("show");
    setShow(false);

  };
  const { favList, setFavList, setisFavPhotoExist, setShow, modalPhoto } = props;
  console.log(modalPhoto);
  return (
    <div className='photo-details-modal'>
      <PhotoFavButton
id={modalPhoto.id}
        favList={favList}
        setFavList={setFavList}
        setisFavPhotoExist={setisFavPhotoExist}
      />
      <button onClick={handleClick} className='photo-details-modal--close-button'>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <img src={modalPhoto.urls.regular} alt="" />
      {/* <PhotoList photos={photos} /> */}
    </div>);

};

export default PhotoDetailsModal;