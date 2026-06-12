import React from "react";
import "../styles/Campaigns.css";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
const Campaigns = () => {
  return (
    <div>
    <div className="img-name3">
    <div className="img3-card">
      <div>
        <div className="tex">
          <h1>
            Campaigns that{" "}
            <span style={{ color: "#FFD129" }}>Drive Change.</span>
          </h1>
          <p>
            Join our mission to transform Kandukur through focused initiatives
            that address the most pressing needs
            <br />
            of our community.
          </p>
        </div>
      </div>
      <div>
        <div className="image-card">
          <div className="image-card1">
            <img src={img1} alt="...." />
            <h2>Swachh Andhra</h2>
            <p>
              A visionary initiative by the Telugu Desam Party to make Andhra
              Pradesh clean, green, and pollution-free through public
              participation and better waste management.
            </p>
          </div>
          <div className="image-card1">
            <img src={img2} alt="...." />
            <h2>Free Bus for Women</h2>
            <p>
              The Telugu Desam Party aims to empower women in Andhra Pradesh by
              introducing free bus travel facilities, helping women travel
              safely and reduce daily transportation expenses.
            </p>
          </div>
          <div className="image-card1">
            <img src={img3} alt="...." />
            <h2>Anna Canteen</h2>
            <p>
              Telugu Desam Party introduced Anna Canteens to provide hygienic
              and affordable meals for poor and middle-class people across
              Andhra Pradesh.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="img-name2">
    <section className="img-name1">
        <div className="img-name">
            <img src={img4} alt="...."/>
            <h2>Have an issue in your ward?</h2>
            <p>Reporting issues helps us prioritize our campaign efforts and serve you better.</p>
            <button>Report An Issue</button>
        </div>
    </section>
    </div>
    </div>
    </div>
  );
};
export default Campaigns;
