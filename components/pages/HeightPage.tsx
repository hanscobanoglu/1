import React,{useState,useEffect}from 'react'
import HightPorject from '../common/HightPorject/HightPorject';
import { data } from "../data/data";

function HeightPage() 
{

  const [current,setCurrent] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setCurrent(position);
};
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
//console.log('current',current)

const screenlist=[{
  
  title:"Merhaba",
  subtext1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra porttitor convallis viverra amet dignissim.",
  subtext2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra porttitor convallis viverra amet dignissim.",
  bgcolor:"red",
  heightLimit: 1,
},
{
  title:"Merhaba",
  subtext1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra porttitor convallis viverra amet dignissim.",
  subtext2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra porttitor convallis viverra amet dignissim.",
  bgcolor:"blue",
  heightLimit: 399,
},
{
  title:"Merhaba",
  subtext1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra porttitor convallis viverra amet dignissim.",
  subtext2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra porttitor convallis viverra amet dignissim.",
  bgcolor:"orange",
  heightLimit: 1180,
},
{
  title:"Merhaba",
  subtext1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra porttitor convallis viverra amet dignissim.",
  subtext2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra porttitor convallis viverra amet dignissim.",
  bgcolor:"black",
  heightLimit: 1500,
}
] ;

  return (
    <div className='height-container'>
         { screenlist.map((item,index) => (
             
            <div key={index}>
           <HightPorject 
            title={item.title}
            subtitle={item.subtext1}
            subtitle1={item.subtext2}
            bgcolor={item.bgcolor}
            id={index}
            current={Math.floor(current)}
            heightLimit={item.heightLimit}
           />
          </div>
       
      ))}
    
    </div>
  )
}

export default HeightPage
