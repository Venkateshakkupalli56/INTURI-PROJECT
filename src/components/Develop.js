import React from "react";
import "../styles/Develop.css";
import inturi1 from "../assests/inturi1.png";
import inturi2 from "../assests/inturi2.png";
import photo from "../assests/photo.png";
import a from "../assests/a.png";
import b from "../assests/b.png";
import c from "../assests/c.png";
import d from "../assests/d.png";
import e from "../assests/e.png";
import f from "../assests/f.png";
import youtube from "../assests/youtube.png";
import twitter from "../assests/twitter.png";
import facebook from "../assests/facebook.png";
import instagram from "../assests/instagram.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Develop = () => {
  return (
    <div>
      <div className="develop">
        <div>
          <h1 style={{fontWeight: "bold",marginLeft: "20px",marginTop: "180px",}}>A Legacy of<br/><span style={{ color: "#FFD129" }}>Excellence.</span></h1>
          <p style={{ fontSize: "21px", marginLeft: "20px" }}>Recognized for humanitarian leadership and dedication <br/>to sustainable development projects in the region.</p>
        </div>
        <div className="inturi1">
          <img src={inturi1} alt="...." />
        </div>
      </div>
      <div className="political">
        <h1 style={{ fontSize: "50px", fontWeight: "bold", textAlign: "center" }}>Political <span style={{ color: "#FFD129" }}>Pulse.</span> </h1>
        <div className="project">
          <div className="inturi2">
            <img src={inturi2} alt="...." />
          </div>
          <div>
            <div className="event">
              <h4>Press Release</h4>
              <p>TDP supports farmers with financial aid, irrigation projects,and better crop development <br/>schemes.</p>
            </div>
            <div className="event1">
              <h4>Events</h4>
              <p>MLA Inturi Nageswara Rao has been actively participating inlocal events, including weddings <br/>and community gatherings.</p>
            </div>
            </div>
          </div>
      </div>
      <section className="local">
        <div className="healthcare">
            <h4 style={{marginLeft:'20px',color:'#FFD129'}}>Healthcare</h4>
            <p>TDP focuses on better healthcare services with improved <br/>hospitals and affordable treatment for people.</p>
        </div>
        <div className="jobs">
          <h4 style={{marginLeft:'20px',color:'#FFD129'}}>Jobs</h4>
          <p>TDP focuses on creating jobs for youth through industries, <br/>IT growth, and skill development programs.</p>
        </div>
        <div className="reviews">
          <h4 style={{marginLeft:'20px',color:'#FFD129'}}>Local Reviews</h4>
          <p>Kandukur MLA Inturi Nageswara Rao has been actively <br/>conducting local reviews and resolving maintenance issues.</p>
        </div>
      </section>
      <footer className="page"> 
        <div className="slider">
          <h1 style={{ fontSize: "50px", fontWeight: "bold", textAlign: "center",marginTop:'20px'}}>Moments with the <span style={{ color: "#FFD129" }}>People.</span></h1>
          <div className="slider1">
            <img src={a} alt="...."/>
            <img src={b} alt="...."/>
            <img src={c} alt="...."/>
            <img src={d} alt="...."/>
            <img src={e} alt="...."/>
            <img src={f} alt="...."/>
          </div>
           <div className="name">
        <button>VIEW FULL JOURNEY</button><br/><br/>
        <h1>FOLLOW <span style={{color:'#FFD129'}}>INTURI</span></h1>
      </div>
      <div className="links">
        <div className="youtube">
          <p>YOUTUBE</p>
          <a href="https://www.youtube.com/@INTURINAGESWARARAO"><img src={youtube} alt="...." /></a>
        </div>
        <div className="twitter">
          <p>TWITTER</p>
          <a href="https://x.com/inrKandukuru?lang=en"><img src={twitter} alt="...."/></a>
        </div>
        <div className="facebook">
          <p>FACEBOOK</p>
          <a href="https://www.facebook.com/iNRKandukuru/"><img src={facebook} alt="...."/></a>
        </div>
        <div className="instagram">
          <p>INSTAGRAM</p>
          <a href="https://www.instagram.com/inturi_nageswararao/"><img src={instagram} alt="...."/></a>
        </div>
      </div>
        </div>
      </footer>
      <div className="img3">
        <div className="img4">
          <img src={photo} alt="....."/>
        </div>
        <div className="img5">
        <div className="link">
          <span><a href="https://www.facebook.com/iNRKandukuru/"><FaFacebookSquare /></a></span>
          <span><a href="https://x.com/inrKandukuru?lang=en"><FaTwitter /></a></span>
          <span><a href="https://www.instagram.com/inturi_nageswararao/"><FaInstagram /></a></span>
          <span><a href="https://www.youtube.com/@INTURINAGESWARARAO"><FaYoutube /></a></span>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Develop;
