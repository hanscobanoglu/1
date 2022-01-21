import React ,{useState} from 'react'
import ButtonSlider from '../common/Button/ButtonSlider/ButtonSlider';
import Sliderimg from '../common/Sliderİmg/Sliderimg';

function Slider() {
  const [state, setstate] = useState(0);
 
  return (
    <div className="">
        <ButtonSlider />
        <Sliderimg />
    </div>
  )
}

export default Slider
