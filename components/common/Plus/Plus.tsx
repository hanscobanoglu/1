import React from 'react'
import {Dispatch,SetStateAction} from 'react';

interface Props{
    plusFunc:Dispatch<SetStateAction<number>>;
    number: number;
  }
const Plus = (props:Props) => {
    const {plusFunc,number} =props;

    return (
        <div className="Number-Container">
            <div className="Number-Wrapper">
                <div className="Number-Plus">
                <button className="button-text" onClick={()=> plusFunc(number+1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Plus
