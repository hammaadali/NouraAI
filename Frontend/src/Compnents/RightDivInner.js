import React from 'react';
import '../myApp.css';


const RightDivInner = ({ imageUrl }) => {
  return <div className="right-div-inner" style={{ backgroundImage: `url(${imageUrl})` }}></div>;
};

export default RightDivInner;