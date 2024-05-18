import React from 'react';


const Image = (props) => {
  return (
    <div className='message__wrapper'>
      <img
        className='message__img'
        src={props.url}
        alt='dalle generated'
        loading='lazy'
      />
    </div>
  );
};

export default Image;
