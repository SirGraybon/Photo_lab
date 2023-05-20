import React from 'react';


import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  return (

    <a className="topic-list--item"

      formAction={props.link}
    >
      {props.value}
    </a>
  );
};

// TopicListItem.defaultProps = {
//   id: 1,
//   label: 'Nature',
//   link: 'link placeholder'
// };
export default TopicListItem;