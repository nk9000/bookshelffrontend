// Card.js
import React from 'react';
import { FaRegSquarePlus } from "react-icons/fa6";
const Card = ({ product }) => {
  return (
    <div className="card">
        <div className='cardimage'>
        <img className='pi' src={product.image} alt={product.productName} />
        </div>

<div className='cardtext'>
<div className='toptwo'>
{/* flex column */}

<span className='one'>{product.productName}</span>
<span className='two'>{product.oneLiner}</span>
</div>
<div className='bottomtwo'>
<span className='three'>Rs.{product.price} / </span>
<span className='four'>{ product.quantity} gm</span>
<FaRegSquarePlus className='plus' />
</div>
</div>

      
    

    </div>
  );
};

export default Card;
