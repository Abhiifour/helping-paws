import React from 'react'

import './Slide.scss'
function Slide({url}) {
  return (
    <div>
         <div className="slide  center">
        <div className="imgBox">
        <img src={url} alt="" />
        </div>
        <div className="details">
        <div className="title">How Can Dogs Help Mentally Challenged Children?
</div>
        <div className="sub-title">Are you battling with your dog for a peaceful walk every morning? Follow these 6 easy steps to leash train your dog like a pro!</div>
        <button className="btn-primary">Read More</button>
        </div>
    </div>
    </div>
  )
}

export default Slide;