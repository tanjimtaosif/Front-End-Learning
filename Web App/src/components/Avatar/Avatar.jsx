import React from 'react';
import './Avatar.scss';

const Avatar = ({ type = 'blob' }) => {
  return (
    <div className={`avatar avatar--${type}`}>
      {/* Additional internal face elements can be added here */}
    </div>
  );
};

export default Avatar;
