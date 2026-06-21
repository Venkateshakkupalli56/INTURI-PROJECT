import React from 'react'
import '../styles/About.css';
import about from '../assests/about.png';
import p1 from '../assests/p1.png';
import p2 from '../assests/p2.png';
import png1 from '../assests/png1.jpg';
import png2 from '../assests/png2.png';
import png3 from '../assests/png3.png';
import { IoWaterOutline } from "react-icons/io5";
import { LiaRoadSolid } from "react-icons/lia";
import { FaHeartPulse } from "react-icons/fa6";
import { PiBuildingsLight } from "react-icons/pi";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { LuHandshake } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineBulb } from "react-icons/ai";
import photo from "../assests/photo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <header>
        <img src={about} alt='.'/>
      </header>
      <section className='leadership'>
        <div className='p1'>
          <img src={p1} alt='.'/>
        </div>
        <div className='people'>
          <h1>A Vision for the <span>People.</span></h1>
          <p>We focus on people-centric governance, ensuring every initiative directly benefits the community. My commitment is to build a modern, transparent, and welfare-driven Kandukuru that serves as a benchmark for regional development.</p>
        <div className='peoples'>
          <div className='water'>
            <span><IoWaterOutline /></span>
            <h5>Water & Irrigation</h5>
            <p>Championing projects that brought water, hope and prosperity to farmers.</p>
          </div>
          <div className='infrastructure'>
            <span><LiaRoadSolid /></span>
            <h5>Infrastructure</h5>
            <p>Building roads, bridges and connectivity for a stronger Kandukuru.</p>
          </div>
          <div className='facilities'>
            <span><FaHeartPulse /></span>
            <h5>Healthcare</h5>
            <p>Improving healthcare facilities and ensuring better lives for all.</p>
          </div>
        </div>
        </div>
      </section>
      <section className='c'>
          <div className='png1'>
          <img src={png1} alt='.'/>
          <p className='first-of-type'>Families Served</p>
          <p className='last-of-type'>50,000+</p>
        </div>
         <div className='png2'>
          <img src={png2} alt='.'/>
          <p className='first-of-type'>Community Projects</p>
          <p className='last-of-type'>25+</p>
        </div>
        <div className='png3'>
          <img src={png3} alt='.'/>
          <p className='first-of-type'>Welfare Schemes</p>
          <p className='last-of-type'>100+</p>
        </div>
      </section>
      <section className='town'>
        <div>
        <h1>The Journey of <span>Impact</span></h1>
        <p>Born into a family with deep roots in Kandhukuru, Inturi Nageswara Rao has always held a profound sense of responsibility toward his hometown and its residents.</p>
        <div className='house'>
          <div>
            <span><PiBuildingsLight /></span>
          </div>
          <div>
            <h4>Development Vision</h4>
            <p>Since being elected as MLA in 2024, he has championed high-impact projects including flyovers, modernized riverfronts, and the establishment of essential healthcare institutions.</p>
          </div>
        </div>
        <div className='house'>
          <div>
            <span><RiShieldKeyholeLine /></span>
          </div>
          <div>
            <h4>State Representation</h4>
            <p>His tenure as MLA represents the growing influence of the state's developmental agenda on the state platform.</p>
          </div>
        </div>
        </div>
        <div>
          <img src={p2} alt='.'/>
        </div>
      </section>
      <footer className='first'>
        <h1>Character of <span>Leadership</span></h1>
        <div className='first1'>
          <div className='second'>
            <span><LuHandshake /></span>
            <h4>Welfare First</h4>
            <p>Prioritizing social security and grassroots schemes that touch every family.</p>
          </div>
          <div className='three'>
            <span><BsGraphUpArrow /></span>
            <h4>Modern Growth</h4>
            <p>Building high-tech infrastructure that connects our region to the global economy.</p>
          </div>
          <div className='three1'>
            <span><AiOutlineBulb /></span>
            <h4>Legacy of Vision</h4>
            <p>Preparing Kandhukuru for the future through healthcare and educational mastery.</p>
          </div>
        </div>
      </footer>
      <footer>
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
        </footer>
    </div>
  )
}

export default About
