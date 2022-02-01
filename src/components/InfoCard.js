import React from 'react';

function InfoCard({ name,symbol,icon,price }) {
  return (
      <div className='info-card'>
        <div>
            <img src={icon} alt='icon' />
        </div>

        <div id='info-card-name' className='info-card-name'>
            {name} {symbol}
        </div>

        <div>
            {price}  $
        </div>
      </div>
  );
}

export default InfoCard;
