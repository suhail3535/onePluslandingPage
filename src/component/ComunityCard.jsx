import React from "react";
import powerimage from "../Images/comunity.webp";
import "../Styles/Comunity.css";

const ComunityCard = () => {
    return (
        <div className="main_comunity_container">
        <div className="comunity_content_div">
                <h1 id="one_plus_comunity">The Power of Community</h1>
                <div className="price_listing_wrapper_comunity">
                    <p>
                        Our biggest community-driven project - Power of
                        Community, has the ambitious goal of bringing the
                        concept of co-creation to life.
                    </p>
                    <a href="#" style={{ textDecoration: "underline" }}>
                        {" "}
                        Learn More..
                    </a>
                </div>
            </div>
            <div className="sectionimage_div">
                <img src={powerimage} alt="section" />
            </div>
        </div>
    );
};

export default ComunityCard;
