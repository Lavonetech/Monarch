import React from 'react';

function Card({ isOpen }) {
  return (
    <div className={`card py-7 px-7 w-49 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="card-body bg-white border border-black">
        <div className=' bg-black flex flex-row justify-between'>
            <div>  
                <p className=' px-2 text-white'>Sleeve</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
