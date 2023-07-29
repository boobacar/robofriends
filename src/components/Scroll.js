import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '3px solid #0ccac4', height: '72vh'}}>
      {props.children}
    </div>
  );
};

export default Scroll;