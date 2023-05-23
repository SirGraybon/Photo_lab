import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
 const {isFavPhotoExist, topics, dispatch} = props 

 const refreshPage = function(){
  window.location.reload();
}
  
  return (
    <div className="top-nav-bar">
      <span onClick={refreshPage} className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={topics} dispatch={dispatch}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;