import React from "react";
import "../Styles/Footer.css";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BsCreditCard,BsBank2,BsPiggyBank,BsFacebook } from 'react-icons/bs'
import { GiWallet } from 'react-icons/gi'

const Footer = () => {
    return (
        <>
        <div className="footer_main_container">
            <div className="footer_card_wrapper">
                <button className="child_one"> Phones</button> <br />
                <button> OnePlus 11R 5G </button><br />
                <button> OnePlus 11 5G </button><br />
                <button> OnePlus Nord 3 5G</button><br />
                <button> OnePlus Nord CE3 5G </button><br />
                <button> OnePlus Nord CE 3 Lite 5G</button><br />
                <button> OnePlus 10R 5G </button><br />
                <button> OnePlus 10 Pro 5G </button><br />
                <button> OnePlus Nord 2T 5G </button><br />
                <button> OnePlus Nord CE 2 Lite 5G </button><br />
                <button> OnePlus 10T 5G</button><br />
                <button> OnePlus 9 5G </button><br />
                <button> OnePlus 9R 5G </button><br />
            </div>
            <div className="footer_card_wrapper">
                <button className="child_one"> Store</button> <br />
                <button> Tablet </button><br />
                <button> TV & Display</button><br />
                <button> Audio</button><br />
                <button> Wearables</button><br />
                <button> Cases & Protection</button><br />
                <button>Power & Cables</button><br />
                <button> Bundles </button><br />
                <button> Gear</button>
            </div>
            <div className="footer_card_wrapper">
                <button className="child_one">Support</button> <br />
                <button>Protection PLans</button>
                <button>Shopping FAQs</button><br />
                <button>User Manuals</button><br />
                <button>Service Centers</button><br />
                <button>Affiliate Program</button><br />
                <button>Repair Service </button><br />
                <button>Repair Pricing </button><br />
                <button>TV Spare Part Price</button><br />
                <button>Softwere Update</button>
            </div>
            <div className="footer_card_wrapper">
                <button className="child_one">Explore</button> <br />
                <button>About OnePlus</button><br />
                <button>Community</button><br />
                <button>Find a store</button><br />
                <button>OnePlus Store app</button><br />
                <button>OxygenOS</button><br />
                <button>Press</button><br />
                <button>Blog </button><br />
                <button>Careers</button><br />
                <button>Campus Opportunities</button>
            </div>
            <div className="footer_card_wrapper">
                <button className="child_one">Programs</button> <br />
                <button>Exchange Program</button>
                <button>Red Cable Club</button>
            </div>

        </div>
        <div className="icon_div_wrapper">
                <div className="icon_div_one">
                    <button>
                        <span><BsCreditCard/></span>Credit/DebitCard
                    </button>
                    <button>
                        <span><BsBank2/></span>NetBanking
                    </button>
                    <button>
                        <span><BsPiggyBank/></span>EMI
                    </button>
                    <button>
                        <span><GiWallet/></span>Wallet
                    </button>
                </div>


                <div className="icon_div_two">
                    <button>
                                <BsFacebook style={{color:"rgb(66, 103, 178)",fontSize:"1.5rem"}}/>

                    </button>
                    <button>
                                <FaTwitter style={{color:"rgb(0, 172, 228)",fontSize:"1.5rem"}}/>

                    </button>
                    <button>
                                <FaInstagram style={{color:"rgb(214,41,118)",fontSize:"1.5rem"}}  />

                    </button>
                    <button>Get Support From OnePlus</button>
                </div>
            </div>
                <hr  style={{width:"95%",margin:"auto"}}/>

            </>
    );
};

export default Footer;
