import React, { useState } from "react";

interface Props {
  title: string;
  subtitle1: string;
  subtitle: string;
  bgcolor: string;
  id: number;
  current: number;
  heightLimit: number;
}

let page1 = false;
let page2 = false;
let page3 = false;
let page4 = false;

function HightPorject(props: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, subtitle, subtitle1, bgcolor, id, current, heightLimit } =
    props;
  let sayı = 0;
  const displayClass = () => {
    if (current >= 0) {
      page1 = true;
    }
    if (current >= 700)
    {
      page1 = false;
    }
    if (current >= 600) {
      page2 = true;
    }
    if (current >= 1300)
    {
      page2 = false;
    }
    if (current >= 1200) {
      page3 = true;
    }
    if (current >= 2000)
    {
      page3 = false;
    }
    if (current >= 2070 ) {
      page4 = true;
    }
    if (current <= 2000 ) {
      page4 = false;
    }
  };
  displayClass();

  return (
    <div className="height" style={{ height: "100vh" }}>
      <div className="height-wrapper">
      {id === 0  ? (
        <div className={`heightproject-comp${page1===false ? "-effectclose" : "-effectopen"}`} style={{backgroundColor: `${bgcolor}` }}>
          <div className="height-text-container">
            <div className="height-text-wrapper">
              <div>{title}</div> 
              <div>{subtitle}</div>
              <div>{subtitle1}</div>
            </div>
          </div>
        </div>
      ) : null}
      {id === 1  ? (
       <div className={`heightproject-comp${page2===false ? "-effectclose" : "-effectopen"}`} style={{backgroundColor: `${bgcolor}` }}>
       <div className="height-text-container">
         <div className="height-text-wrapper">
           <div>{title}</div> 
           <div>{subtitle}</div>
           <div>{subtitle1}</div>
         </div>
       </div>
     </div>
      ) : null}
      {id === 2  ? (
      <div className={`heightproject-comp${page3===false ? "-effectclose" : "-effectopen"}`} style={{backgroundColor: `${bgcolor}` }}>
      <div className="height-text-container">
        <div className="height-text-wrapper">
          <div>{title}</div> 
          <div>{subtitle}</div>
          <div>{subtitle1}</div>
        </div>
      </div>
    </div>
      ) : null}
      {id === 3  ? (
     <div className={`heightproject-comp${page4===false ? "-effectclose" : "-effectopen"}`} style={{backgroundColor: `${bgcolor}` }}>
     <div className="height-text-container">
       <div className="height-text-wrapper">
         <div>{title}</div> 
         <div>{subtitle}</div>
         <div>{subtitle1}</div>
       </div>
     </div>
   </div>
      ) : null}
      </div>
    </div>
  );
}

export default HightPorject;
