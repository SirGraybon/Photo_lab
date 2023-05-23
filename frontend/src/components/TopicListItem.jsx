import React from 'react';


import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const {value, dispatch, id} = props
  return (
    <a onClick={() => dispatch({type: "filterTopic", topic: id })} className="topic-list--item">
      {value}
    </a>

  );
};


export default TopicListItem;