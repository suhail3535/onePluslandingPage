import React from "react";
import sectionimage from "../../Images/topsectionnew.webp";
import "../../Styles/Topsection.css";

const Topsection = () => {
    return (
        <>
            <div className="top_section_wrapper">
                <div className="content_div_wrapper">
                    <h1 id="one_plus_11">OnePlus 11 5G</h1>
                    <div className="price_listing_wrapper_top_section">
                        <p>
                        Save additional up to ₹8 000 with exchange bonus on select devices.
                        </p>
                        <h5> From <span>&#8377;</span>54 999* Incl. bank discount</h5>
                        <div className="top_section_button_div">
                            <button>Buy Now</button>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>

                <div className="sectionimage_div">
                    <img id="section_image" src={sectionimage} alt="section" />
                </div>
            </div>
        </>
    );
};

export default Topsection;
