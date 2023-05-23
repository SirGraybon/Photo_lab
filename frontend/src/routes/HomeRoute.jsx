import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import { useState } from 'react';



const HomeRoute = (props) => {
  const { show, setShow, modalPhoto, setModalPhoto, favList, setFavList, photos, setisFavPhotoExist, isFavPhotoExist, dispatch, topics } = props;



  return (
    <div className="home-route">
      <TopNavigation
        isFavPhotoExist={isFavPhotoExist}
        topics = {topics}
        dispatch={dispatch}
      />
      <PhotoList
        setisFavPhotoExist={setisFavPhotoExist}
        modalPhoto={modalPhoto}
        setModalPhoto={setModalPhoto}
        photos={photos}
        favList={favList}
        setFavList={setFavList}
        dispatch={dispatch}
      />

    </div>
  );
};

export default HomeRoute;