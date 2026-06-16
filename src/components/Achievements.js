import React from "react";
import "../styles/Achievements.css";
import a1 from "../assests/a1.png";
import a2 from "../assests/a2.png";
import a3 from "../assests/a3.png";
import a4 from "../assests/a4.png";
import b1 from "../assests/b1.png";
import b2 from "../assests/b2.png";
import b3 from "../assests/b3.png";
import b4 from "../assests/b4.png";
import c1 from "../assests/c1.png";
import c2 from "../assests/c2.jpeg";
import c3 from "../assests/c3.png";
import c4 from "../assests/c4.png";
import d1 from "../assests/d1.png";
import d2 from "../assests/d2.png";
import d3 from "../assests/d3.png";
import d4 from "../assests/d4.png";
import e1 from "../assests/e1.png";
import e2 from "../assests/e2.png";
import e4 from "../assests/e4.png";
import e5 from "../assests/e5.png";
import photo from "../assests/photo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Achievements = () => {
  return (
    <div>
      <div className="login">
      <h1 className="h">ACHIEVEMENTS</h1>
      <nav>
        <input type="text" placeholder="Search By Mandal" />
        <button>Search</button>
      </nav>
      <section>
        <div className="ac">
          <div className="ace">
            <img src={a1} alt='....' className="ia2"/>
            <img src={a2}alt="..."  className="ia2" />
            <br />
            <img src={a3} alt="..."  className="ia4"/>
            <img src={a4} alt='..' className="ia4" />
          </div>
          <div className="content">
            <ul>
              <li>
                The construction of CC roads in several areas of Ekalavya Nagar
                in <br />
                Kandukur town.
              </li>
              <li>Rs. 30 lakhs CC road construction in NTR Nagar.</li>
              <li>458 farmers received new pattadar passbooks.</li>
              <li>
                Development works started in several wards of Kandukur
                Municipality.
              </li>
              <li>Around ₹1.91 crore NUDA funds utilized.</li>
              <li>
                CC roads constructed in divisions 3, 16, 20, 22, 24, 25, 26 and
                30.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="card2">
        <div className="develop">
        <div className="list1">
          <ul>
            <li>Tar road from Kothur to NH-167B after 30 years.</li>
            <li>₹1.5 crore road development immediately after election.</li>
            <li>₹18 lakh CC roads in Ward No. 9.</li>
            <li>₹30 lakh sanctioned for Ward No. 25.</li>
            <li>Road development from CTRI to Mahadevapuram Junction.</li>
          </ul>
        </div>
        <div className="card10">
        <div className="img-card2">
            <img src={b1} alt="." className="ib1"/>
            <img src={b2} alt="." className="ib2"/><br/>
            <img src={b3} alt="." className="ib3"/>
            <img src={b4} alt="." className="ib4"/>
        </div>
        </div>
        </div>
      </section>
      <section>
        <div className="ac">
          <div className="ace1">
            <img src={c1} alt="."/>
            <img src={c2} alt="." className="c2" />
            <br />
            <img src={c3} alt="." className="c3"/>
            <img src={c4} alt="." className="c4" />
          </div>
          <div className="content1">
            <ul>
              <li>State-of-the-art bus shelters at a cost of ₹2.5 lakh.</li>
              <li>North Canal culvert constructed with ₹5 lakh personal funds.</li>
              <li>Kandukur–Venkatadripalem road developed with ₹20 lakh.</li>
              <li>BT road works started with ₹1.2 crore.</li>
              <li>Potluru–Pajarla road completed with ₹60 lakh.</li>
              <li>₹1,50,60,000 benefit received by 1004 auto drivers.</li>
            </ul>
          </div>
          </div>
          <h4 className="village">Ramayapatnam</h4>
          </section>
          <section className="card2">
        <div className="development">
        <div className="list2">
          <ul>
           <li>Ramayapatnam Chenthana Heavy Cargo Rail Terminal</li>
           <li>₹1,615 crore mega project.</li>
           <li>Employment for 1,300 unemployed youth.</li>
           <li>Expansion across 429 acres.</li>
           <li>Bulk handling, cold chain and logistics yards.</li>
           <li>Growth through rail-road connectivity.</li>
           <li>Continuous progress in Kandukur constituency.</li>
          </ul>
        </div>
        <div className="card10">
        <div className="img-card3">
            <img src={d1} alt="." className="id1"/>
            <img src={d2} alt="." className="id2"/><br/>
            <img src={d3} alt="." className="id3"/>
            <img src={d4} alt="." className="id4"/>
        </div>
        </div>
        </div>
      </section>
      <h4 className="msme1">MSME Park</h4>
       <section>
        <div className="msme">
          <div className="msme-park">
            <img src={e1} alt='....' className="ie1"/>
            <img src={e2}alt="..."  className="ie2" />
            <br />
            <img src={e4} alt="..."  className="ie4"/>
            <img src={e5} alt='..' className="ie4"/>
          </div>
          <div className="msme-park1">
            <ul>
             <li>100-acre MSME Park at Ayyavaripalle.</li>
             <li>Boosting industrial growth in Kandukur region.</li>
             <li>Part of the “One Family, One Entrepreneur” initiative.</li>
             <li>Encouraging local entrepreneurship and startups.</li>
             <li>Creating thousands of jobs for youth.</li>
             <li>Attracting new investments and industries.</li>
             <li>Strengthening the region's economic development.</li>
            </ul>
          </div>
        </div>
      </section>
      </div>
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
  );
};

export default Achievements;
