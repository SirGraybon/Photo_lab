import '../styles/PhotoListItem.scss';
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import useApplicationData from '../hooks/useApplicationData';


// import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  const {setShow, modalPhoto, setModalPhoto, photo,favList, setFavList, id, setisFavPhotoExist, dispatch } = props;





  return (
    <article className="photo-list--item" key={id} >
      <PhotoFavButton
        id={id}
        favList={favList}
        setFavList={setFavList}
        setisFavPhotoExist={setisFavPhotoExist}
        dispatch={dispatch}
      />
      <img onClick={() => dispatch({type: "setShow", id })} className="photo-list--image" src={props.src} alt="" />
      <div className='photo-list--user-details'>
        <img className='photo-list--user-profile' src={photo.user.profile}/>
        <div>
        <div>
          {photo.user.username}
        </div>
        {photo.location.city}, {photo.location.country}
        </div>
      </div>
    </article>
  );
};



export default PhotoListItem;