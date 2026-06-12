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
const Achievements = () => {
  return (
    <div>
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
            <img src={c3} alt="."/>
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
          <h4>Ramayapatnam</h4>
          </section>
    </div>
  );
};

export default Achievements;
