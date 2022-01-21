import React, {useState}from 'react'


interface Props{
    Random1?: number;
    Selective:string;
    }
const Player1 = (props:Props) => {
 const {Random1,Selective}= props;
 if(Random1===0)
 {Selective="Taş"}
 if(Random1===-1) {
    Selective="Kağıt"
 }
 if(Random1===-2) {
    Selective="Kağıt"
 }

   
    return (
        <div>
        <label>Player1</label>
      
       <h1> {Selective} </h1>
        </div>
    )
}

export default Player1
