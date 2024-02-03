import React from 'react'
import headerimage from "../Images/1.webp"
import "../Styles/Header.css"
const Header = () => {
  return (
      <div>
   <div class="container">
              <img src={headerimage} alt="Snow" />
              <div class="top-left"> <p>A little more Than you'd expect</p>
                  <h1>OnePlus <br /> Nord CE35G</h1>
              </div>

              <div class="bottom-left">
                  <p>
                      From <span>&#8377;</span>26,999 <br />
                      Sale is now live!
                  </p>
                  <div className='buy_now_div'> <button>Buy Now </button>
                      <a href="blank">Learn More</a>
                  </div>

                  </div>



          </div>



    </div>
  )
}

export default Header