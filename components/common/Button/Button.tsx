import React,{Dispatch,SetStateAction}  from 'react';

interface Props{
    pageFunc:Dispatch<SetStateAction<page1>>;
    page1:number;
    data: {
        title: string;
        title2: string;
        subtext1: string;
        subtext2: string;
        textAlign: string;
        img: string;
    }
  }
  

//Gelen dataya göre img leri bastıracağım.  

const DbPage = (props:Props) => {
    const {pageFunc,page1,data} =props;
    return (
        <div className='button-container'>
            <div className='button-button-wrapper'>
                <div className='button-component' onClick={()=> pageFunc(page1=0)}>Lörem ipsum difanade nera. Utena lårad. Der manas trede vipängar. Missmatchning viment. Teradång demoskop temakonfirmation bäll till kopasade. </div>
                <button className='button-button' onClick={()=> pageFunc(page1=1)}>{data.subtext1}</button>
                <button className='button-button' onClick={()=> pageFunc(page1=2)}>{data.subtext1}</button>
                <button className='button-button' onClick={()=> pageFunc(page1=3)}>{data.subtext1}</button>
            </div>
        </div> 
    )
}

export default DbPage
