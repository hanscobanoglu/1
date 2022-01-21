import { FunctionComponent, useState,useEffect} from 'react'
import Creator from '../common/Creator/Creator';
import Player1 from '../common/Player1/Player1'



const Photos: FunctionComponent = () => {
  const [state,setState] = useState(0);
  const [state1,setState1] = useState(0);
  const [select1,setSelect1] = useState("");
  const [select2,setSelect2] = useState("");

  useEffect(() =>{
  if(state===0){
    setSelect1('Taş')
  }
  if(state===-1) {
    setSelect1('Kağıt')
  }
  if(state===-2) {
    setSelect1('Makas')
  }
  if(state1===0){
    setSelect2('Taş')
  }
  if(state1===-1) {
    setSelect2('Kağıt')
  }
  if(state1===-2) {
    setSelect2('Makas')
  }

  })
  
 

 

  return (
    <div>
   
        <Creator 
        Random1Func={setState} 
        rndm1={state} 
        Random2Func={setState1}
        rndm2={state1}
        />
        <div>Player1</div>
       <h1>{select1}</h1>
       <div>Player2</div>
       <h1>{select2}</h1>
    </div>
  )
}


export default Photos
