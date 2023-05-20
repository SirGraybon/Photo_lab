import React from 'react';
import { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photoData from './mocks/photos.json';

const App = () => {
  /////STATEs//////////////////////
  /////USING
  const photos = [...photoData];
  const [isFavPhotoExist, setisFavPhotoExist] = useState(false);
  const [favList, setFavList] = useState([]);
  const [show, setShow] = useState(false);
  console.log("favList: ", favList);
  const [modalPhoto, setModalPhoto] = useState(null);
  ////////////////////////////////////////////////////

  /////test area/////



  ////////////////////





  return (
    <div className="App">
      <HomeRoute
        show={show}
        setShow={setShow}
        modalPhoto={modalPhoto}
        setModalPhoto={setModalPhoto}
        isFavPhotoExist={isFavPhotoExist}
        photos={photos}
        favList={favList}
        setFavList={setFavList}
        setisFavPhotoExist={setisFavPhotoExist}
      />
      {show &&
        <PhotoDetailsModal
          favList={favList}
          setFavList={setFavList}
          setisFavPhotoExist={setisFavPhotoExist}
          photos={photos}
          modalPhoto={modalPhoto}
          show={show}
          setShow={setShow}
        />}
    </div>
  );
};

export default App;