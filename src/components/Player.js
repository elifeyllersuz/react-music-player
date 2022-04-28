import React, { useState,useRef, useEffect } from 'react';


import {
    BiPlayCircle,
    BiPauseCircle,
    BiSkipPreviousCircle,
    BiSkipNextCircle
} from 'react-icons/bi'
export default function Player({
    currentSong,
    currentIndex,
    nextSong,
    previousSong
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    //dom elemanlarına erişmek
    const audioRef = useRef(null);
    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if(isPlaying){
            audioRef.current.play();
        }
        else{
            audioRef.current.pause();
        }
    
    },[isPlaying,currentIndex])
    return (
        <div>
            <audio ref={audioRef}
            src={currentSong.music}>
                
            </audio>
            <div className='player-card'>
             
                {currentSong ? (
                    <div>
                        <img >{}</img>
                        <h2 className='active-song-name'>{currentSong.name}</h2>
                        <h4 className='active-artist-name'>{currentSong.creator}</h4>
                    </div>
                ) : (
                    ""
                )}


                <div className='control-icon'>
                    <BiSkipPreviousCircle
                        color='white'
                        className='icons'
                        size={50}
                        onClick={previousSong} />
                    {isPlaying ? (
                        <BiPauseCircle
                            color='#673ab7'
                            className='icons'
                            size={60}
                            onClick={togglePlay}
                        />
                    ) : (
                        <BiPlayCircle
                            color='#673ab7'
                            size={60}
                            className='icons'
                            onClick={togglePlay}
                        />

                    )}
                    <BiSkipNextCircle
                        color='white'
                        size={50}
                        className='icons'
                        onClick={nextSong}
                    />
                </div>
            </div>
        </div>
    )
}
