import type { NextPage } from 'next'
import { useState } from 'react';
import TvRemote from '../common/TvRemote/Tvremote'
import TvScreen from '../common/TvScreen/TvScreen';

interface ScreenType{
  embed?: string;
  turnoff?: boolean;
  turnon?: boolean;
}

const Home: NextPage = () => {
  const [screenState, setScreenState] = useState<ScreenType>({
    embed:'https://www.youtube.com/embed/BcLEyudhXcA',
    turnoff: false,
    turnon:true,
  });
  
  return (
    <div className="home-container">
      <div className="home-remate-wrapper">
        <TvRemote setScreenState={setScreenState}/>
      </div>
      <div className="emty"></div>
      <div className="home-screen-wrapper">
        <TvScreen embed={screenState.embed} turnon={screenState.turnon} turnoff={screenState.turnoff}/>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSei4Rg-iOw8MYNGhuekNrx6jzd6767oE5moeCD1V2f2E7G22Q/viewform?embedded=true" width="640" height="1097" >Yükleniyor…</iframe>
      </div>
    </div>
  )
}

export default Home
