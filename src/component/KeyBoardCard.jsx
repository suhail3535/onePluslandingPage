import React from "react";
import keyboardimage from "../Images/keyboard.webp";
import "../Styles/KeyBoardCard.css";

const KeyBoardCard = () => {
    return (
        <>
            <div className="keybord_card_wrapper">
                <div className="keybord_sectionimage_div">
                    <img src={keyboardimage} alt="section" />
                </div>
                <div className="keybordcard_content_div">
                    <h4>Rewrite the rules</h4>
                    <h1 id="one_plus_keybord">Keyboard 81 Pro</h1>
                    <div className="price_listing_wrapper_keybord">
                        <p>
                            Power by OnePlus Design | Co-Created Switches | The
                            First Bouncy but Durable Keycap sale is now live ! Earn 2x Red Coins & Save additional 5% off with RedCoins.
                        </p>
                    <a href="#" style={{textDecoration:"underline"}}> Buy Now</a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default KeyBoardCard;
