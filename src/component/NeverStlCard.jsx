import React from "react";
import neverImage from "../Images/neverstl.webp";
import "../Styles/Neverstlcard.css";

const   NeverStlCard = () => {
    return (
        <>
            <div className="neverstl_card_wrapper">

                <div className="neverstl_content_div">

                    <h1 id="one_plus_stlcard">Evolve your digital life</h1>
                    <div className="price_listing_wrapper_stlcard">
                        <p>
                        Discover how OnePlus empowers you with burdenless technology.
                        </p>
                    <a href="#" style={{textDecoration:"underline"}}>  Learn More-</a>

                    </div>
                </div>
                    <div className="sectionimage_div_neverstl">
                    <img src={neverImage} alt="section" />
                </div>
            </div>
        </>
    );
};

export default  NeverStlCard;
