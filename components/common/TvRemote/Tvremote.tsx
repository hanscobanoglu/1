import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props{
  setScreenState: Dispatch<SetStateAction<{ embed?: string; turnoff?: boolean; turnon?: boolean;  }>>
}

const TvRemote = (props:Props) => {
  const {setScreenState} = props

  return (
    <div className="tv-remote-container">
      <div className="remote-button" onClick={() => setScreenState({embed:"https://www.youtube.com/embed/BcLEyudhXcA?rel=0&amp;autoplay=1" })}>
        A Haber
      </div>
      <div className="remote-button" onClick={() => setScreenState({embed:"https://www.youtube.com/embed/AzwT-gEsZBg?rel=0&amp;autoplay=1" })}>
        Halk Tv
      </div>
      <div className="remote-button" onClick={() => setScreenState({embed:"https://www.youtube.com/embed/SqHIO2zhxbA?rel=0&amp;autoplay=1" })}>
        Haber Türk
      </div>
      <div className="remote-button" onClick={() => setScreenState({embed:"https://www.youtube.com/embed/heVK_XQ_-Jo?rel=0&amp;autoplay=1" })}>
        Tele 1
      </div>
      <div className="remote-button" onClick={() => setScreenState({embed: 'https://www.youtube.com/embed/BcLEyudhXcA?rel=0&amp;autoplay=1', turnon:true,turnoff:false})}>
        Torn On
      </div>
      <div className="remote-button" onClick={() => setScreenState({embed: 'https://www.youtube.com/embed/BcLEyudhXcA?rel=0&amp;autoplay=1', turnon:false,turnoff:true})}>
        Torn Off
      </div>
    </div>
  )
}

export default TvRemote;
