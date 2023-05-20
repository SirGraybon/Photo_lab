import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';




const PhotoList = (props) => {

  const { show, setShow, modalPhoto, setModalPhoto, favList, setFavList, photos, setisFavPhotoExist } = props;
  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return (<PhotoListItem
          key={photo.id}
          photo={photo}
          modalPhoto={modalPhoto}
          setModalPhoto={setModalPhoto}
          show={show}
          setShow={setShow}
          id={photo.id}
          src={photo.urls.thumb}
          favList={favList}
          setFavList={setFavList}
          setisFavPhotoExist={setisFavPhotoExist}

        />);
      })

      }

    </ul>
  );
};


export default PhotoList;