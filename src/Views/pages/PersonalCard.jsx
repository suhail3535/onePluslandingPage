import React from 'react'
import "../../Styles/PersonalCard.css"
import msg from "../../Images/msg.webp"
import user from "../../Images/user.webp"

const PersonalCard = () => {
  return (
      <div className='bottom_card_container'>
          <div className='part_one_div_wrapper'>
              <div className='details_div_wrapper_card'>
                  <h4>One-on-One with OnePlus</h4>
                  <h3>Your personal helpdesk.</h3>
                  <p>From finding the perfect phone to quickly resolving queries, we're always ready to help.
</p>
                  <a href="">Learn more</a>
              </div>
              <div className='image_div_wrapper' >
                  <img src={msg} alt="oxigen" />
              </div>
          </div>





            <div className='part_two_div_wrapper'>
              <div className='details_div2_wrapper'>
                  <h4>OnePlus Service Center</h4>
                  <h3>Our technical team is here to help</h3>
                  <p>The 2023 OnePlus Photography Awards is dedicated to honoring everyone to use their phones.
</p>
                  <a href="">Learn more</a>
              </div>
              <div className='image_div_user'>
                  <img src={user} alt="oxigen" />
              </div>
          </div>
    </div>
  )
}

export default PersonalCard