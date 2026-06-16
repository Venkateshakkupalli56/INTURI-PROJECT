import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div>
      <h1 className="contact">Contact Us</h1>
      <div className="camp1">
        <section>
          <div className="camp">
            <h2>OUR CAMP OFFICE</h2>
            <p>
              <strong>Address:-</strong> INR camp office Pamuru Road Santhosh
              Nagar
            </p>
            <p>
              <strong>OPP:-</strong> INR camp office Pamuru Road Santhosh Nagar
            </p>
            <p>
              <strong>MANDAL:-</strong>KANDUKUR
            </p>
            <p>
              <strong>DISTRICT:-</strong>PRAKASAM
            </p>
            <p>
              <strong>STATE:-</strong>ANDHRA PRADESH
            </p>
            <p>
              <strong>PIN CODE:-</strong>523105
            </p>
            <p>
              <strong>E-MAIL</strong>inrforkandukuru@gmail.com
            </p>
            <p>
              <strong>PHONE NUMBER</strong>9899999999
            </p>
          </div>
        </section>
        <section>
          <div className="details">
            <h5>Voter-ID</h5>
            <input type="text" placeholder="Enter your voter-ID" />
            <h5>OR</h5>
            <div className="fields">
              <h6>Name</h6>
              <input type="text" placeholder="Enter your Name" />
              <h6>Phone Number</h6>
              <input type="number" placeholder="Enter your number" />
              <h6>Village</h6>
              <select>
                <option>choose village</option>
              </select>
            </div>
          </div>
        </section>
        
        <footer>
            <div className="fields1">
                <h6>Photo<span>*</span></h6>
                <input type="file" placeholder="No file choosen" className="photo"/>
                <h6>Mandal <span>*</span></h6>
                <select>
                    <option>choose mandal</option>
                    <option>Lingasamudram</option>
                    <option>Ulavapadu</option>
                    <option>Voletivaripalem</option>
                    <option>Gudluru</option>
                    <option>Kandukur</option>
                </select>
                <h6>Subject <span>*</span></h6>
                <input type="text" placeholder="Enter the subject"/>
            </div>
        </footer>
        </div>
        <input type="text" placeholder="Enter your message" className="input1"/><br/><br/>
        <button className="btn2">Submit</button>
    </div>
  );
};

export default Contact;
