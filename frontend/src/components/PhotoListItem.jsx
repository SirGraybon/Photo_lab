import '../styles/PhotoListItem.scss';
import React from 'react';
import PhotoFavButton from './PhotoFavButton';

// import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  const {setShow, modalPhoto, setModalPhoto, photo,favList, setFavList, id, setisFavPhotoExist } = props;


  const handleClick = function(id) {
    setShow(true);
    setModalPhoto(photo);
    console.log(modalPhoto);
  };

  return (
    <article className="photo-list--item" key={id} >
      <PhotoFavButton
        id={id}
        favList={favList}
        setFavList={setFavList}
        setisFavPhotoExist={setisFavPhotoExist}
      />
      <img onClick={() => handleClick(photo)} className="photo-list--image" src={props.src} alt="" />
    </article>
  );
};



export default PhotoListItem;