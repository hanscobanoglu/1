import React, {FunctionComponent,useState,Dispatch,SetStateAction}from 'react'

interface Props{
    Random1Func:Dispatch<SetStateAction<number>>;
    Random2Func:Dispatch<SetStateAction<number>>;
    rndm1:number;
    rndm2:number;
}
const Creator = (props:Props) => {
const {Random1Func,Random2Func,rndm1,rndm2} =props;
    const min = 0;
    const max = 3;
   
  
    console.log("Random1 :", rndm1,"Random2 :" ,rndm2);
  
    const handleRandomNum = () => {
      

        Random1Func(rndm1=Math.floor(Math.random()* (min- max)+ min+1));
        Random2Func(rndm2=Math.floor(Math.random()* (min- max+1)+ min));

        const rndInt = Math.floor(Math.random() * 6) + 1
      console.log("Burdayım :", rndInt);
       
    }
    return (
        <div>
          <button onClick={ handleRandomNum}>Play </button>
        </div>
    )
}

export default Creator
