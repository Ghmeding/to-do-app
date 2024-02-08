import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';


export const TickIcon = () => {
  return (
    <FontAwesomeIcon icon={ faCheckCircle } className='tick'/>
  );
}

export default TickIcon;