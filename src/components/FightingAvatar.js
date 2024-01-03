import React, { useState } from 'react';

function FightingAvatar() {
  const [isFighting, setIsFighting] = useState(false);

  const startFight = () => {
    setIsFighting(true);
    setTimeout(() => {
      setIsFighting(false);
    }, 2000);
  };

  return (<div className='fight'>
      <div className={`avatar  fighting1`} onClick={startFight}>
        <img src="http://www.dustloop.com/wiki/images/2/26/DBFZ_Goku_jL.png" height={100} width={100}/>
      </div>
      <div className={`avatar fighting2`} onClick={startFight}>
        <img src="https://i.pinimg.com/736x/96/60/43/966043bf5a3bb076f5e16134cc32f0e4.jpg"height={100} width={100}/>
      </div>
  </div>
  );
}

export default FightingAvatar;
