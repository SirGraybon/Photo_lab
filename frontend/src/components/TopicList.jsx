import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import topics from '../mocks/topics.json'

const TopicList = () => {
  return (
    <div className="top-nav-bar--topic-list">
      {topics.map(topic => <TopicListItem 
      key ={topic.id} 
      id ={topic.id} 
      value={topic.title} 
      link={topic.link} />)}
    </div>
  );
};


export default TopicList;