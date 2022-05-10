import React ,{useState} from 'react'
import ButtonSlider from '../common/Button/ButtonSlider/ButtonSlider';
import CaffeComponent from '../common/Cafe/CaffeComponent';

function Caffe() {
  const [state, setstate] = useState(0);
 
  return (
    <div className="">
     
        <CaffeComponent />
    </div>
  )
}

export default Caffe
