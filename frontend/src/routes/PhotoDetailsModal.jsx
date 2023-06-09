import React from 'react';
import { useState } from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {

  const { show, setShow, modalPhoto, setModalPhoto, favList, setFavList, setisFavPhotoExist, dispatch } = props;


  return (
    <div className='photo-details-modal'>

      <button onClick={() => dispatch({ type: "setHide", })} className='photo-details-modal--close-button'>
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


      <div className='photo-details-modal--top-bar'>
        <div>

          <PhotoFavButton
            id={modalPhoto.id}
            favList={favList}
            dispatch={dispatch}
            setisFavPhotoExist={setisFavPhotoExist}
          />
          <img className='photo-details-modal--image' src={modalPhoto.urls.full} alt="" />

          <div className='photo-list--user-details'>
            <img className='photo-list--user-profile' src={modalPhoto.user.profile} />
            <div>
              <div>
                {modalPhoto.user.username}
              </div>
              {modalPhoto.location.city}, {modalPhoto.location.country}
            </div>
          </div>

        </div>
      </div>

      <div className='photo-details-modal--images'>

        <PhotoList
          setisFavPhotoExist={setisFavPhotoExist}
          modalPhoto={modalPhoto}
          setModalPhoto={setModalPhoto}
          show={show}
          setShow={setShow}
          photos={modalPhoto.similar_photos}
          favList={favList}
          setFavList={setFavList}
          dispatch={dispatch}
        />
      </div>
    </div>);

};

export default PhotoDetailsModal;