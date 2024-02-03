import React from "react";
import "../../Styles/Middle.css";
import ledimage from "../../Images/LedTv.webp";
import budsimage from "../../Images/Nord-buds-2-pc.png.thumb.webp";
const Middle = () => {
    return (
        <div className="main_container">
            <div className="part_one">
                <div className="content_div1">
                    <h1 className="heading">
                        OnePlus TV 50 <br />
                        Y1S Pro
                    </h1>
                    <div className="price_listing_wrapper">
                        <h5 className="details_info">

                            At <span>&#8377;</span>34 999* <br />
                            *Incl. Bank Discount
                        </h5>
                        <div className="middle_button_div1">
                            <button>Buy Now</button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="image_div1">
                    <img src={ledimage} alt="ledimage" />
                </div>
            </div>

            <div className="part_two">
                <div className="content_div2">
                    <h2 style={{ fontSize: "1.5rem" }}>Get in the Groove</h2>
                    <h1 className="heading">
                        OnePlus Nord <br />
                        Buds 2
                    </h1>
                    <div className="price_listing_wrapper2">
                        <p>Get a free wireless charger on Buds Pro 2</p>
                        <h5 className="details_info">
                            From ₹8 999* Incl. bank discount
                        </h5>
                        <div className="middle_button_div1">
                            <button>Buy Now</button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="image_div2">
                    <img src={budsimage} alt="ledimage" />
                </div>
            </div>
        </div>
    );
};

export default Middle;
