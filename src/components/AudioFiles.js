import React from 'react'
//functional component
export default function AudioFiles({
  song,
  getSongData,
  index}) {

  return (
    <div className='player-container' onClick={() => getSongData(song,index)}>
     <h4 className='song-name'>{song.name}</h4> 
    </div>
  )
}
