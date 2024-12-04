import React from "react";
import "./App.css";
import logo from './images/logo.webp'
import logo1 from './images/logo2.png'
import psg from './images/psg.jpg'


const App = () => {
  return (
    <div className="app">
      <div className="home">
      <header className="header">
        <nav>
          <img src={logo} alt="" className="logo"/>
          <img src={logo1} alt="" height={80} width={100} style={{marginRight:30}}/>
          <h3 className="logotxt">In Nation building since 1926</h3>
        </nav>
        <img src={psg} alt="" className="psg" id="image-with-fade"/>
        <h1>
          National Conference on Advances in<br/>  Material Science<br/>  and Technology<br/> 
          (AMST 2024)<br/><br/>   27 – 28 December 2024
        </h1>
      </header>

      <div className="rightside">
      <section className="about">
        <h2>About PSG Sons' & Charities</h2>
        <p>
          PSG College of Technology is a Govt. Aided, Autonomous Institution
          affiliated to Anna University and an ISO 9001:2015 certified
          institute. The institution maintains close interaction with industries
          and research institutions worldwide, fostering innovation and
          collaboration.
        </p>
        
      </section>
      <section className="about">
        <h2>About PSG College of Technology</h2>
        <p>
          PSG College of Technology is a Govt. Aided, Autonomous Institution
          affiliated to Anna University and an ISO 9001:2015 certified
          institute. The institution maintains close interaction with industries
          and research institutions worldwide, fostering innovation and
          collaboration.
        </p>
      </section>
      <section className="about">
        <h2>About the Applied Science Department</h2>
        <p>
          The department engages in cutting-edge research funded by government
          agencies, offering hands-on experience and contributing to
          technological advancements.
        </p>
      </section>
      <section className="about">
        <h2>About the Conference</h2>
        <p>
          The department engages in cutting-edge research funded by government
          agencies, offering hands-on experience and contributing to
          technological advancements.
        </p>
      </section>
      <section className="committee">
        <h3>Chief Patron</h3>
        <ul>
          <li>Dr. M.D. Kannan - Professor</li>
          <li>Dr. K. Vaideki - Professor</li>
          <li>Dr. J. Jeyakodi Moses - Associate Professor</li>
          <li>Dr. P. Yasodha - Assistant Professor</li>
          <li>Dr. Senthil Kumar - Assistant Professor</li>
          <li>Dr. C. Sudarshan - Assistant Professor</li>
        </ul>
      </section>
      <section className="committee">
        <h2>Organizing Committee Members</h2>
        <ul>
          <li>Dr. M.D. Kannan - Professor</li>
          <li>Dr. K. Vaideki - Professor</li>
          <li>Dr. J. Jeyakodi Moses - Associate Professor</li>
          <li>Dr. P. Yasodha - Assistant Professor</li>
          <li>Dr. Senthil Kumar - Assistant Professor</li>
          <li>Dr. C. Sudarshan - Assistant Professor</li>
        </ul>
      </section>
      <section className="committee">
        <h2>National Advisory Committee</h2>
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

      <section className="committee">
        <h2>Important Dates</h2>
        <ul>
          
        </ul>
      </section>
      <section className="committee">
        <h2>Bank Account Details for Registration</h2>
        <ul>
          
        </ul>
      </section>
      <section className="committee">
        <h2>Registration Form</h2>
        <ul>
          
        </ul>
      </section>
      <footer className="footer">
        <p>© 2024 PSG College of Technology. All rights reserved.</p>
      </footer>
      </div>
      </div>
    </div>
  );
};

export default App;
