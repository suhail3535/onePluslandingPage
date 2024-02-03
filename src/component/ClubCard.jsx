import React from "react";
import clubimage from "../Images/club.webp";
import "../Styles/Clubcard.css";

const ClubCard = () => {
    return (
        <>
            <div className="club_card_wrapper">
                <div className="card_sectionimage_div">
                    <img src={clubimage} alt="section" />
                </div>
                <div className="club_card_content_div">

                    <h1 id="one_plus_club_card">One community, limitless passion</h1>
                    <div className="price_listing_wrapper_clubcard">
                        <p>
                        United by one common belief - 'Great happens when we're all wired together'.
                        </p>
                    <a href="#" style={{textDecoration:"underline"}}> Join Now</a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ClubCard;
