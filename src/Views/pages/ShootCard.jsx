import React from 'react'
import shot1image from "../../Images/shot1.webp"
import shot2image from "../../Images/shot2.webp"
import shot3image from "../../Images/shot3.webp"
import "../../Styles/Shootcard.css"
const ShootCard = () => {
  return (
      <div className='shot_card_container'>
          <div className='shot_card'>
              <img src={shot1image} alt="" />
              <h1>Shot on OnePlus November 2022 - Night....</h1>
              <p>Welcome to November as we usher in the Fall season!</p>
              <a className='achor_tag' href="">Read More..</a>

           </div>

<div className='shot_card'>
              <img src={shot2image} alt="" />
              <h1>All about OxygenOS – October 2022</h1>
              <p>We are very thrilled to share with you that the OxygenOS FAQs are back!</p>
              <a className='achor_tag' href="">Read More..</a>

          </div>
          <div className='shot_card'>
              <img src={shot3image} alt="" />
              <h1>[Contest] OnePlus Wiki - Started By Us, Curated By..</h1>
              <p>Welcome to the OnePlus Wiki, a never-ending OnePlus Museum.</p>
              <a className='achor_tag' href="">Read More..</a>

           </div>

      </div>
  )
}

export default ShootCard