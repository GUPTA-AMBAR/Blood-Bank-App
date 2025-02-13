import React from "react";

const FlipCard = () => {
  return (
    <div id="cards50">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top img- fluid" src="./assests/images/modal1.png" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <h4>Age</h4>
            <p >Donor should be in the age group of 18 to 65 years.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top img- fluid" src="./assests/images/modal2.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <h4>Weight</h4>
            <p >The Donor Should not be less than 45 Kilograms.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top img- fluid" src="./assests/images/modal3.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <h4>Pulse</h4>
            <p>Temperature and Pulse of the donor shall be normal.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img sclassName="card-img-top img- fluid" src="./assests/images/modal4.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <h5>Blood Pressure</h5>
            <p>The systolic and diastolic blood pressures are within normal limits.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top img- fluid" src="./assests/images/modal5.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <b>Malaria</b>
            <p>Should Not have been treated for malaria in last 3 months or 3 years.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top img- fluid" src="./assests/images/modal6.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <h4>Infection</h4>
            <p>Should NOT have Hepatitis B, C, Tuberculosis, Leprosy, HIV. </p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top img- fluid" src="./assests/images/modal7.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <h4>Drugs</h4>
            <p>You cannot give blood if injected intravenously, even once.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top img- fluid" src="./assests/images/modal8.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <h4>Heart Diseases</h4>
            <p>hould NOT have any Heart diseases.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="card-img-top img- fluid" src="./assests/images/modal9.png" alt="Avatar" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="flip-card-back">
            <h6>Diabetes</h6>
            <p>YES if resolved or controled by diet or oral drug. NO if treated with insulin injections. </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FlipCard;
