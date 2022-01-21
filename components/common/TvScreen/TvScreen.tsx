import test from '../../../public/test.png';

interface Props{
  embed?: string;
  turnon?: boolean;
  turnoff?: boolean;
}

const TvScreen = (props:Props) => {
  const {embed, turnoff} = props;
 
  return (
    <>
    {
      turnoff ? 
      <div className="tv-screen-close"><img src={test.src}/></div>
      :
      <div className="tv-screen-container">
        <iframe 
          width="100%" 
          height="580" 
          src={embed}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    }
      
    </>
  )
}

export default TvScreen;
