import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const { modalPhoto, favList, photos, setisFavPhotoExist, dispatch } = props;

  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return (<PhotoListItem
          key={photo.id}
          photo={photo}
          modalPhoto={modalPhoto}
          id={photo.id}
          src={photo.urls.regular}
          favList={favList}
          setisFavPhotoExist={setisFavPhotoExist}
          dispatch={dispatch}

        />);
      })

      }

    </ul>
  );
};


export default PhotoList;