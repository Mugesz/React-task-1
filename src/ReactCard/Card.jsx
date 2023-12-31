import React from 'react';
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const Card = ({ details }) => {
  return (
    <div>

      <div className='container'>
        <div className='cards'>
          <div className='header'>
            <p>{details.valid}</p>
            <h2>${details.plan}<small>/month</small></h2>
          </div>

          <div className='card-body'>
            <ul>
              {details.feature.map((item ,index) => {
                return <li key={index} className={item.value ? '' : 'false-value'}><span>{item.value ?
                  <FontAwesomeIcon icon={faCheck} /> :
                  <FontAwesomeIcon icon={faXmark} />}
                </span>{item.keys}</li>
              })}
            </ul>
          </div>
          <div className='btn'>
            <button>BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
