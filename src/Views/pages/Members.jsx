import React from "react";
import memberimage from "../../Images/memberpart.webp";
import "../../Styles/Members.css";

const MemberSection = () => {
    return (
        <>
            <div className="member_section_wrapper">
                <div className="member_bottom_sectionimage_div">
                    <img src={memberimage} alt="section" />
                </div>
                <div className="member_content_div_bottom_section">

                    <h1 id="member_bottom_one_plus_wrapper">August RCC Members' Day</h1>
                    <div className="member_bottom_section_price_listing_wrapper">
                        <p>
                            Get a chance to win OnePlus Buds Pro2 and much more
                        </p>

                        <div className="member_bottom_button_div">
                            <button>Participate Now</button>

                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default MemberSection;
