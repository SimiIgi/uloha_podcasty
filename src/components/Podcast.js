import React from 'react';
import "./Podcast.css"


const Podcast = ({data}) => {
    const { num, title, guest } = data;
    
    return (
    <div className="episodes-list">
      <div className='episode'>
        <div className='episode__num'>{num}</div>
        <div className='episode__body'>
          <div className='.episode__title'>{title}</div>
          <div className='episode__guest'>{guest}</div>
        </div>
      </div>
    </div>
    )
}


export default Podcast
