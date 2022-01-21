import { FunctionComponent, useEffect, useState } from "react";
//import { useStopwatch } from 'react-timer-hook';

import LeftPage from "../common/LeftPage/LeftPage";
import Button from "../common/Button/Button";
import RightPage from "../common/RightPage/RightPage";

import { data } from "../../data/data";
import { useTimer } from 'react-timer-hook';
import MyTime from '../common/Timer/timer'
import internal from "stream";
import { nextTick } from "process";



// Sol tarafta detaylar sağ tarafta fotografların olduğu bir blog sayfası görmek istiyoruz.
// Sağ tarafta sadece img göstereceğim
// Sol tarafta ise detayları göstereceğiz.

function Blog() {
  const [state, setState] = useState(0);
  const [counter, setCounter] = useState(0)
  let a= 0;
  const timers = new Date();
  let currentTime = timers.setSeconds(30);


useEffect(() => {
  
  if(currentTime <= 10){
    setCounter(counter + 1)
  }
},[])


  return (
    <div>     
      <div className="blog-container">
        <div className="blog-row-right">
          <LeftPage data={data[state]}/>
        </div>
        <div className="blog-row-left">
          <RightPage data={data[state]} />
        </div>
      </div>
      <Button page1={state} pageFunc={setState} data={data[state]} />
    </div>
  );
}

export default Blog;
