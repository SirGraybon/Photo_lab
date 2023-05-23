import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';


const TopicList = (props) => {
  const {topics, dispatch} = props
  return (
    <div className="top-nav-bar--topic-list">
      {topics.map(topic => <TopicListItem 
      key ={topic.id} 
      id ={topic.id} 
      value={topic.title} 
      link={topic.id} 
      dispatch={dispatch}/>)}
    </div>
  );
};


export default TopicList;