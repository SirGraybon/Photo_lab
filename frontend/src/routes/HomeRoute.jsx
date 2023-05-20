import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import { useState } from 'react';



const HomeRoute = (props) => {
  const { show, setShow, modalPhoto, setModalPhoto, favList, setFavList, photos, setisFavPhotoExist, isFavPhotoExist } = props;



  return (
    <div className="home-route">
      <TopNavigation
        isFavPhotoExist={isFavPhotoExist}
      />
      <PhotoList
        setisFavPhotoExist={setisFavPhotoExist}
        modalPhoto={modalPhoto}
        setModalPhoto={setModalPhoto}
        show={show}
        setShow={setShow}
        photos={photos}
        favList={favList}
        setFavList={setFavList}
      />

    </div>
  );
};

export default HomeRoute;