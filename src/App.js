import { useState } from 'react';
import './App.css';
import { audios } from './audioData';
import AudioFiles from './components/AudioFiles';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState(audios);
  //o andaki şarkının indexi
  const [currentIndex,setCurrentIndex] = useState(null);
  //o an ki şarkı
  const [currentSong,setCurrentSong] = useState(songs[0])
  const getSongData = (song,index) =>{
    setCurrentIndex(index);
    setCurrentSong(song);
  }

  const nextSong = () =>{
    setCurrentIndex(currentIndex + 1)
    setCurrentSong(audios[currentIndex+1])
  }
  const previousSong = () =>{
    setCurrentIndex(currentIndex - 1)
    setCurrentSong(audios[currentIndex-1])
  }

  return (
    /*props => pass the songs inside the player component
    <Player audios={audios}/>
    */
    <>
      <div className='player-main'>
        < Player 
        currentSong={currentSong}
        currentIndex={currentIndex} 
        nextSong={nextSong}
        previousSong={previousSong}/>
      </div>
     
    </>
  );
}

export default App;
