import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>
          National Conference on Advances in Material Science and Technology
          (AMST 2024)
        </h1>
        <p>27 – 28 December 2024</p>
      </header>

      <section className="about">
        <h2>About PSG College of Technology</h2>
        <p>
          PSG College of Technology is a Govt. Aided, Autonomous Institution
          affiliated to Anna University and an ISO 9001:2015 certified
          institute. The institution maintains close interaction with industries
          and research institutions worldwide, fostering innovation and
          collaboration.
        </p>
        <h3>About the Applied Science Department</h3>
        <p>
          The department engages in cutting-edge research funded by government
          agencies, offering hands-on experience and contributing to
          technological advancements.
        </p>
      </section>

      <section className="committee">
        <h2>Organizing Committee</h2>
        <ul>
          <li>Dr. M.D. Kannan - Professor</li>
          <li>Dr. K. Vaideki - Professor</li>
          <li>Dr. J. Jeyakodi Moses - Associate Professor</li>
          <li>Dr. P. Yasodha - Assistant Professor</li>
          <li>Dr. Senthil Kumar - Assistant Professor</li>
          <li>Dr. C. Sudarshan - Assistant Professor</li>
        </ul>
      </section>

      <section className="thrust-areas">
        <h2>Thrust Areas</h2>
        <ul>
          <li>Functional Materials</li>
          <li>Smart Materials</li>
          <li>Green Energy/Renewable Energy Materials</li>
          <li>Bio-materials</li>
          <li>Polymeric Materials</li>
          <li>Thin Films</li>
        </ul>
      </section>

      <section className="registration">
        <h2>Registration</h2>
        <p>
          Registration fees:
          <ul>
            <li>Industry and R&D Centers: ₹2000</li>
            <li>Academicians: ₹1500</li>
            <li>Research Scholars: ₹1000</li>
            <li>PG/UG Students: ₹500</li>
          </ul>
        </p>
        <p>Last Date for Registration: 18 Dec 2024</p>
      </section>

      <footer className="footer">
        <p>© 2024 PSG College of Technology. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
