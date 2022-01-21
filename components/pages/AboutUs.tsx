import React ,{useState} from 'react'
import Minus from '../common/Minust/Minust';
import Plus from '../common/Plus/Plus'


function AboutUs() {
  const [state, setstate] = useState(0);
 
  return (
    <div className="Number-Container">
            <div className="Number-Wrapper">
      
      <Plus plusFunc={setstate} number={state}/>
      <div style={{color:`${state<0? 'red':'green' && state>0? 'green': 'red' && state===0 ?'black': ''}`}}>{state}</div>
      <Minus minustFunc={setstate} number={state}/>
      </div>
    </div>
  )
}

export default AboutUs
