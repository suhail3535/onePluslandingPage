import React from 'react'
import bottomimage1 from "../Images/im01.png"
import bottomimage2 from "../Images/img02.png"
import "../Styles/Footer.css"
const BottomImage = () => {
  return (
      <div className='bottom_image_wrapper_container'>
          <div className='bottom_card_image_wrapper1'><img  src={bottomimage1} alt="" /></div>
          <div className='bottom_card_image_wrapper2'><img  src={bottomimage2} alt="" /></div>
    </div>
  )
}

export default BottomImage