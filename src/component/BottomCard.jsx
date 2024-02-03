import React from 'react'
import "../Styles/BottomCard.css"
import oxigen from "../Images/oxygenos13-pc.jpg.thumb.webp"
import smallpic from "../Images/small-pc.jpg.thumb.webp"
const BottomCard = () => {
  return (
      <div className='bottom_card_container'>
          <div className='part_one_div_wrapper'>
              <div className='details_div_wrapper_one'>
                  <h4>OxygenOS 13</h4>
                  <h3>Inspired by nature</h3>
                  <p>OxygenOS 13 welcomes you with a visually refreshed and bold design. Every intuitive element, every streamlined step, is faster, smoother, and burdenless.
</p>
                  <a href="">Learn more</a>
              </div>
              <div className='image_div_wrapper_one' >
                  <img src={oxigen} alt="oxigen" />
              </div>
          </div>

            <div className='part_two_div'>
              <div className='details_div2'>
                  <h4>Capture Every Horizon</h4>
                  <h3>2023 OnePlus Photography Awards Winners</h3>
                  <p>The 2023 OnePlus Photography Awards is dedicated to honoring everyone to use their phones to create their own works, to capture wonderful moments, and to tell the stories behind the lens.
</p>
                  <a href="">Learn more</a>
              </div>
              <div className='image_div_oxigin'>
                  <img src={smallpic} alt="oxigen" />
              </div>
          </div>
    </div>
  )
}

export default BottomCard