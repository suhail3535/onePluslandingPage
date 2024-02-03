import React from "react";
import phone from "../../Images/phone.png";
import phone2 from "../../Images/phone2.png";
import led from "../../Images/led.png";
import tablet from "../../Images/tab.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../Styles/Card.css";
const Card = () => {
    return (
        <div className="card_container_div">
            {/* -----card-1-------------- */}
            <div className="card_div">
                <img src={phone} alt="phone" />
                <h1>OnePlus 11R 5G</h1>
                <p>Save additional 21000 with bank discount.</p>
                <div className="btn-div">
                    <button style={{ marginLeft: "60px" }}>
                        <AiOutlineShoppingCart style={{fontSize:"1.5rem"}}/>
                    </button>
                    <button style={{ marginRight: "80px",fontSize:"1rem" }}>From ₹39,999</button>
                </div>
            </div>
{/* -----card-2-------------- */}
            <div className="card_div">
                <img src={phone2} alt="phone" />
                <h1>OnePlus Nord CE 3 Lite 5G</h1>
                <p>Get 6 months of Spotify Premium at no extra cost.</p>
                <div className="btn-div">
                    <button style={{ marginLeft: "80px" }}>
                        <AiOutlineShoppingCart style={{fontSize:"1.5rem"}} />
                    </button>
                    <button style={{ marginRight: "60px",fontSize:"1rem" }}>From ₹19,999</button>
                </div>
            </div>
{/* -----card-3-------------- */}
            <div className="card_div">
                <img src={led} alt="phone" />
                <h1>OnePlus TV Y Series 32 | 43 Y1S Edge
                <p style={{color:"red"}}>Up to 31% OFF</p>
                </h1>
                <p>
                    Up to 21500 instant bank discount; Save extra 1000 by using
                    the RCC linked device benefit.
                </p>
                <div className="btn-div3">
                    <button style={{ marginLeft: "80px" }}>
                        <AiOutlineShoppingCart style={{fontSize:"1.5rem"}} />
                    </button>
                    <button style={{ marginRight: "60px",fontSize:"1rem" }}>From ₹16,499</button>
                </div>
            </div>
{/* -----card-4-------------- */}
            <div className="card_div">
                <img src={tablet} alt="phone" />
                <h1>OnePlus Pad</h1>
                <p>
                    Save 22000 with bank discount. No Cost EMI up to 12 months.
                </p>
                <div className="btn-div4">
                    <button style={{ marginLeft: "80px" }}>
                        <AiOutlineShoppingCart style={{fontSize:"1.5rem"}}/>
                    </button>
                    <button style={{ marginRight: "60px",fontSize:"1rem" }}>From ₹37,999</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
