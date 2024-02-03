import React from "react";
import Header from "../../component/Header";
import "../../Styles/Home.css";
import Middle from "./Middle";
import Card from "./Card";
import Topsection from "./Topsection";
import BottomSection from "./BottomSection";
import KeyBoardCard from "../../component/KeyBoardCard";
import NeverStlCard from "../../component/NeverStlCard";
import BottomCard from "../../component/BottomCard";
import ClubCard from "../../component/ClubCard";
import ComunityCard from "../../component/ComunityCard";
import ShootCard from "./ShootCard";
import PersonalCard from "./PersonalCard";
import Footer from "../../component/Footer";
import {PiGlobeLight} from "react-icons/pi"
import BottomImage from "../../component/BottomImage";
import {AiOutlineArrowRight} from "react-icons/ai"
import MemberSection from "./Members";
const Home = () => {
    return (
        <div>
            <Header />
            <Topsection />
            <Middle />
            <h1 style={{ marginLeft: "50px" }}>This Week's Hot Picks</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                    fontWeight: "600",
                    marginTop: "1rem",
                    marginLeft: "50px",
                }}>
                <span>Highlights</span>
                <span>Phones</span>
                <span>TV & Display</span>
                <span>Audio</span>
                <span>Wearables</span>
                <span>Accessories</span>
            </div>
            <Card />


            <div style={{ backgroundColor: "black",paddingTop:"1rem" }}>
                <MemberSection />
                    <BottomSection />
                <h2
                    style={{
                        color: "#fff",
                        fontSize: "1.2rem",
                        marginBottom: "20px",
                        padding: "10px",
                        width: "90%",
                        margin: "auto",
                    }}>
                    OnePlus Featuring
                </h2>
                <hr style={{ width: "90%", margin: "auto" }} />
                <h1
                    style={{
                        color: "#fff",
                        fontSize: "3rem",
                        marginBottom: "20px",
                        width: "90%",
                        margin: "auto",
                    }}>
                    Anew platform that strives to ‘Empower the <br />
                    quality of your digital life’.
                    <span style={{ color: "red",textAlign:"left" }}> Discover more <span>&#8594;</span></span>
                </h1>
                <KeyBoardCard />
                <h2
                    style={{
                        color: "#fff",
                        fontSize: "1.2rem",
                        marginBottom: "20px",
                        padding: "10px",
                        width: "90%",
                        margin: "auto",
                    }}>
                    OneTopia
                </h2>
                <hr style={{ width: "90%", margin: "auto" }} />
                <h1
                    style={{
                        color: "#fff",
                        fontSize: "3rem",
                        marginBottom: "20px",
                        width: "90%",
                        margin: "auto",
                    }}>
                    Relentless innovation defines who we are. <br />
                    OnePlus inspires through innovation.{" "}
                    <span style={{ color: "red" }}> Never Settle  <span>&#8594;</span></span>
                </h1>
                <NeverStlCard />
                <BottomCard />
                <h2
                    style={{
                        color: "#fff",
                        fontSize: "1.2rem",
                        marginBottom: "20px",
                        padding: "10px",
                        width: "90%",
                        margin: "auto",
                    }}>
                    Red Cable Club
                </h2>
                <hr style={{ width: "90%", margin: "auto" }} />
                <h1
                    style={{
                        color: "#fff",
                        fontSize: "3rem",
                        marginBottom: "20px",
                        width: "90%",
                        margin: "auto",
                    }}>
                    Unlock exclusive benefits, early access to products, and{" "}
                    <br />
                    unique experiences.{" "}
                    <span style={{ color: "red" }}> Join the Club <span>&#8594;</span></span>
                </h1>
                <ClubCard />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: ".5rem",
                    width: "90%",
                    margin: "auto",
                }}>
                <div style={{ fontSize: "1.4rem",color:"gray" }}>Currently in Community</div>
                <div style={{ fontSize: "1rem" }}>
                    Join us <span style={{ color: "red" }}> +</span>
                </div>
            </div>
            <hr style={{ width: "90%", margin: "auto" }} />
            <ComunityCard />
            <ShootCard />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",

                    width: "90%",
                    margin: "auto",

                }}>
                <div style={{ fontSize: "1.4rem" }}>Support</div>
                <div style={{ fontSize: "1rem" }}>View More +</div>
            </div>
            <hr style={{ width: "90%", margin: " 10px auto" }} />
            <PersonalCard />

            <hr style={{ width: "90%",margin:"auto"}} />
            <div style={{display:"flex",justifyContent:"space-between",width:"70%",height:"60px",marginLeft:"30px"}}>
                <button style={{
                    borderRight: "1px solid gray", marginLeft: "23px", paddingRight: "50px",marginTop:"15px",
                    fontSize:"1.2rem",
                    color: "black", display: "flex", justifyContent: "space-between"
                }}  >Product Help
                    <span style={{ fontSize: "1.5rem", marginTop: "2px",marginLeft:"10px" }}><AiOutlineArrowRight /></span>
                    </button>
            <button style={{
                    borderRight: "1px solid gray", marginLeft: "20px", paddingRight: "50px",marginTop:"15px",
                    fontSize:"1.2rem",
                    color: "black", display: "flex", justifyContent: "space-between"
                }}  >Shopping FAQs
                    <span style={{ fontSize: "1.5rem", marginTop: "2px",marginLeft:"10px" }}><AiOutlineArrowRight /></span>
                    </button>
                <button style={{
                    borderRight: "1px solid gray", marginLeft: "20px", paddingRight: "50px",marginTop:"15px",
                    fontSize:"1.2rem",
                    color: "black", display: "flex", justifyContent: "space-between"
                }}  >TroubleShooting
                    <span style={{ fontSize: "1.5rem", marginTop: "2px",marginLeft:"10px" }}><AiOutlineArrowRight /></span>
                    </button>
                <button style={{
                     marginLeft: "20px", paddingRight: "50px",marginTop:"15px",
                    fontSize:"1.2rem",
                    color: "black", display: "flex", justifyContent: "space-between"
                }} >Protection Plans
                    <span style={{ fontSize: "1.5rem", marginTop: "2px",marginLeft:"10px" }}><AiOutlineArrowRight /></span>
                    </button>
            </div>
            <hr style={{ width: "90%", margin:"auto" }} />
            <div style={{ backgroundColor: "black", marginTop: "10px", paddingBottom: "100px" }}>

          <BottomImage/>
          <Footer/>

                <div style={{display:"flex",justifyContent:"space-between",width:"100%",height:"20px",marginLeft:"30PX",marginTop:"50px"}}>
                <button style={{borderRight:"1px solid gray",paddingRight:"10px"}}  >Privacy Policy</button>
                <button style={{borderRight:"1px solid gray",paddingRight:"10px"}}  >User Agreement</button>
<button style={{borderRight:"1px solid gray",paddingRight:"10px"}}  >Terms of Sales</button>
                <button  style={{borderRight:"1px solid gray",paddingRight:"10px"}}>E-waste management</button>
                <button  style={{borderRight:"1px solid gray",paddingRight:"10px"}}>Security Feedback</button>
                <button  style={{paddingRight:"10px"}}>© 2013 - 2023 OnePlus. All Rights Reserved.</button>
                <button  style={{paddingRight:"10px"}}> <img style={{width:"40%",marginLeft:"10px"}} src="https://image01.oneplus.net/shop/202307/14/1-M00-46-89-CkvTlmSxGVyABjEvAAAMWxG1ttA783.png" alt="logo" srcset="" /></button>
                <button  style={{paddingRight:"10px",display:"flex",justifyContent:"space-around",marginRight:"5rem"}}> India (English) <PiGlobeLight style={{marginTop:"5px"}}/></button>
            </div>
            </div>


        </div>
    );
};

export default Home;
