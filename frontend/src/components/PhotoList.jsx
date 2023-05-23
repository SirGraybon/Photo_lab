import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';




const PhotoList = (props) => {

  const { show, setShow, modalPhoto, setModalPhoto, favList, setFavList, photos, setisFavPhotoExist, dispatch } = props;

  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return (<PhotoListItem
          key={photo.id}
          photo={photo}
          modalPhoto={modalPhoto}
          setModalPhoto={setModalPhoto}
          id={photo.id}
          src={photo.urls.regular}
          favList={favList}
          setFavList={setFavList}
          setisFavPhotoExist={setisFavPhotoExist}
          dispatch={dispatch}

        />);
      })

      }

    </ul>
  );
};


export default PhotoList;