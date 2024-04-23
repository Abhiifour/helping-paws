import React, { useState } from 'react';
import './ArticleCorousel.scss';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import Slide from './Slide/Slide';
import c1 from '../../assests/c1.jpg';
import c2 from '../../assests/c2.jpg';
import c3 from '../../assests/c3.jpg';
import c4 from '../../assests/c4.jpg';
import c5 from '../../assests/c5.jpg';
function ArticleCorousel(){
    const [Index,setIndex] = useState(0);
    const length = 3;
    const img = [c1,c2,c3,c4,c5];

    function handleNext() {
        if (Index == length) {
          setIndex(0);
        } else {
          setIndex(Index + 1);
        }
      }
    
      function handlePrev() {
        if (Index == 0) {
          setIndex(length);
        } else {
          setIndex(Index - 1);
        }
      }
    

  return (
    <div className='ArticleCorousel container '>
    
    <div className="outer">
    <div onClick={handlePrev}>
    <AiOutlineLeft className='icon'/ >
    </div>
    <div onClick={handleNext}>
    <AiOutlineRight className='icon2'/>
    </div>
    <div className="inner center"  style={{ transform: `translateX(-${Index * 100}%)`}}>
    {
      img.map(url => <Slide url={url}/>)
    }
  
    </div>
    </div>

    </div>
    
  )
}

export default ArticleCorousel;