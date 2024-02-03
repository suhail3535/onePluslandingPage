import React from "react";
import bottomimage from "../../Images/bottomsectionimage.webp";
import "../../Styles/Bottom.css";

const BottomSection = () => {
    return (
        <>
            <div className="bottom_section_wrapper">
                <div className="content_div_bottom_section">
                    <h4>One For All</h4>
                    <h1 id="bottom_one_plus_wrapper">OnePlus Ensemble</h1>
                    <div className="bottom_section_price_listing_wrapper">
                        <p>
                            Seamlessly connect all the OnePlus products to one
                            another for a smart and smooth experience.
                        </p>
                        <h5>At ₹109 997* Incl. Bank Discount</h5>
                        <div className="bottom_button_div">
                            <button>Buy Now</button>

                        </div>
                    </div>
                </div>

                <div className="bottom_sectionimage_div">
                    <img src={bottomimage} alt="section" />
                </div>
            </div>
        </>
    );
};

export default BottomSection;
