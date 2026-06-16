import React from 'react'
import '../styles/Accomplishment.css';
import iii from '../assests/iii.png';
import hello1 from '../assests/hello1.png';
import hello2 from '../assests/hello2.png';
import hello3 from '../assests/hello3.png';
import hello4 from '../assests/hello4.png';
import hello5 from '../assests/hello5.png';
import hello6 from '../assests/hello6.png';
import photo from "../assests/photo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Accomplishment = () => {
  return (
    <div>
        <div>
            <img src={iii} alt='.'/>
        </div>
        <section className='img-card'>
            <div className='img-card1'>
            <div className='hello1'>
                <img src={hello1} alt='.'/>
                <p>Provides ₹1, 500 per month as financial assistance to eligible women.Empowers women by supporting their household and personal expenses.</p>
            </div>
            <div className='hello2'>
                <img src={hello2} alt='.'/>
                <p>Provides ₹3,000 per month as financial support to eligible unemployed youth. Helps young job seekers meet expenses while pursuing employment opportunities.</p>
            </div>
            <div className='hello2'>
                <img src={hello3} alt='.'/>
                <p>Provides ₹15,000 per year to support the education of every eligible school-going child. Helps families meet educational expenses and encourages continued learning.</p>
            </div>
            </div>
            <div className='img-card1'>
            <div className='hello'>
                <img src={hello4} alt='.'/>
                <p>Provides ₹20,000 annual financial assistance to eligible farmers for agricultural investment and support.Enhances farm productivity and strengthens the livelihoods of farming families.</p>
            </div>
            <div className='hello3'>
                <img src={hello5} alt='.'/>
                <p>Provides three free LPG gas cylinders every year to eligible households.Reduces the financial burden on families and promotes clean cooking fuel usage.</p>
            </div>
            <div className='hello3'>
                <img src={hello6} alt='.'/>
                <p>Provides free bus travel for women across Andhra Pradesh in APSRTC buses. Enhances mobility, reduces travel expenses, and supports women's empowerment.</p>
            </div>
            </div>
        </section>
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

export default Accomplishment
