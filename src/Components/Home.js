import React, { useState } from "react";
import "../Components/Home.css";

function Home() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState(0);

  function heightHandler(e) {
    setHeight(e.target.value);
  }

  function weightHandler(e) {
    setWeight(e.target.value);
  }

  function calculateBmi() {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmi);
  }

  return (
    <div className="home-outer">
      <h1 className="title">
        <span></span>BMI Calculator
      </h1>
      <div className="home">
        <div className="left">
          <div className="height">
            <input
              type="number"
              placeholder="Enter Your Height In CM"
              onChange={heightHandler}
            />
            <button>Enter Height</button>
          </div>
          <div className="weight">
            <input
              type="number"
              placeholder="Enter Your Weight In KG"
              onChange={weightHandler}
            />
            <button>Enter Weight</button>
          </div>
          <button className="calculate" onClick={calculateBmi}>
            Calculate BMI
          </button>

          {/* <h3>Your Height is {height}</h3>
          <h3>Your Weight is {weight}</h3> */}
          <h3 className="bmi-text">Your BMI is {bmi}</h3>
        </div>
        <div className="right">
          <div className="right-img">
            <img
              src="https://image.freepik.com/free-vector/man-body-mass-index-info-chart_90220-434.jpg"
              alt="bmi-illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
