import React, { useState } from "react";
import "./App.css";
import logo from './images/logo.webp';
import logo1 from './images/logo2.png';
import psg from './images/psg.jpg';

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="content">
            <section className="about">
        <h2>About PSG Sons' & Charities</h2>
        <p>
        Let there be charity, so that other people may share my family's prosperity...-Shri.P.S. Govindaswamy Naidu<br/>
A man of vision, faith and integrity whose initials PSGhave become a living legend at Combatore. At a time when education was an unfulfilled dream for most Indians, one man's vision set out to make that dream a reality. On 25*
January 1926, a Trust under the name and style of P.S. Govindaswamy Naidu &Son's Charities was formed. This trust is dedicated entirely ot the growth and development of education, training, industry and social upliftment.
        </p>
        
      </section>
      <section className="about">
        <h2>About PSG College of Technology</h2>
        <p>
        PSG Colege of Technology is a Govt. Aided, Autonomous Institutions, Affiliated to Anna University and a ISO 9001:2015 certified. This is one of the foremost institutions
founded by the PSG &Sons' Charities Trust. The College was established in the year 1951. The founder Principal Dr G R Damodaran was instrumental in the planned growth of the
institution from the humble beginnings in 1951 ot the present status of a world-renowned technological institution. The
college maintains close interaction with several R&D and higher learning Institutions ni India and abroad, through institutional network programmes and collaborative research programmes. More than 500 research scholars are pursuing their research leading to Ph.D / MS degrees and the college is a recognized QIP centre for Postgraduate and Ph.D programmes. The college offers Research Fellowship to research scholars, aiming ot foster research endeavors and inspire dedicated full-time researchers.
        </p>
      </section>
      <section className="about">
        <h2>About the Applied Science Department</h2>
        <p>
          The department is well-equipped with Physics, Chemistry and Computer laboratories and offers BSc Applied Science Program since 1971. The research laboratories established by faculty members of the department using the funds received through various funded projects sanctioned by Government agencies like DST, UGC, AICTE etc., are Polymeric Research Laboratory, Spintronics and Functional Materials laboratory and Thin Film Centre. These laboratories provide hands on experience ot the students while doing their project work. The faculty members of the department have established good industrial links in and around Coimbatore and provide
industrial links in and around Combatore and provide consultancy to the industries. Al the faculty members of the department are highly qualified and serving in the college for more than 15 years.
        </p>
      </section>
      <section className="about">
        <h2>About the Conference</h2>
        <p>
          The conference aims to foster collaboration and innovation, driving the future of science and engineering. Keynote speakers from renowned institutions will share their insights, providing valuable perspectives on emerging trends. With a commitment to excellence and knowledge sharing, AMST 2024 is poised to be a significant platform for advancing scientific and engineering research. Participants will have the opportunity ot present their research findings, participate in the panel discussions and network with peers from various disciplines.
        </p>
      </section>
          </div>
        );
      case "members":
        return (
          <div className="box">
            <section className="committee">
              <h2>Chief Patron</h2>
              <ul style={{listStyle:"none"}}>
                <li>Shri L. Gopalakrishnan</li>
                <li>Managing Trustee</li>
                <li>PSG Institutions</li>
              </ul>
              <h2>Patron</h2>
              <ul style={{listStyle:"none"}}>
                <li>Dr. K. Prakasan</li>
                <li>Principal</li>
                <li>PSG College of Technology</li>
              </ul>
            </section>
            <section className="committee">
              <h2>Convener</h2>
              <ul style={{listStyle:"none"}}>
                <li>Dr. S.C.Murugavel</li>
                <li>Professor and Head</li>
              </ul>
              <h2>Co-Conveners</h2>
              <ul style={{listStyle:"none"}}>
                <li>Dr. D.Dhanalakshmi</li>
                <li>Assistant Professor (Sl.Gr.)</li>
                <br/>
                <li>Dr. K.Boopathi</li>
                <li>Assistant Professor</li>
              </ul>
            </section>
            <section className="committee" style={{height:400}}>
              <h2>Organizing Committee Members</h2>
              <ul style={{listStyle: "none"}}>
                <li>Dr. MD. Kannan, Professor</li>
                <li>Dr. K. Vaideki, Professor</li>
                <li>Dr. J. Jeyakodi Moses, Associate Professor</li>
                <li>Dr. P. Yasodha, Assistant Professor (St.G)</li>
                <li>Dr. A. Senthil Kumar, Assistant Professor (Sl.G)</li>
                <li>Dr. C. Sudarshan, Assistant Professor (Sl.G)</li>
                <li>Dr. M. Obulichety, Assistant Professor (Sl.G)</li>
                <li>Dr. D. Singaram, Assistant Professor (Sl.G)</li>
                <li>Mr. S. S. Subramanian, Assistant Professor (Sr.G)</li>
                <li>Dr. S. Sankarakumar, Assistant Professor</li>
                <li>Dr. C. Veeramani, Assistant Professor</li>
                <li>Dr. C.K. Senthilkumaran, Assistant Professor</li>
              </ul>
            </section>
            <section className="thrust-areas">
              <h2>Thrust Areas</h2>
              <ul style={{listStyle:"none"}}>
                <li>Functional Materials</li>
                <li>Smart Materials</li>
                <li>Bio-materials</li>
                <li>Green Energy/Renewable Energy Materials</li>
                <li>Nano materials</li>
                <li>Super capacitors</li>
                <li>Photo reduction & oxidation materials</li>
                <li>Polymeric Materials</li>
                <li>Opto-electronic materials</li>
                <li>Ceramic materials</li>
                <li>Dielectric materials</li>
                <li>Composite materials</li>
                <li>Corrosion prevention materials</li>
                <li>Magnetic Materials and Multiferroics</li>
                <li> Computational Modelling and Simultion</li>
                <li>Thin Films</li>
                <li>Mathematical Modelling of Materials</li>
              </ul>
            </section>
            <section className="committee" style={{width:800}}>
              <h2>National Advisory Committee</h2>
              <div style={{display:'flex',justifyContent:'center',gap:200}}>
              <ul style={{listStyle: "none"}}>
                <li>
                  <strong>Dr. G. Mugesh</strong><br />
                  Professor, Inorganic and Physical Chemistry<br />
                  Indian Institute of Science (IISC), Bangalore - 560 012
                </li>
                <li>
                  <strong>Dr. M. Eswaramoorthy</strong><br />
                  Professor, Chemistry and Physics of Materials Unit (CPMU)<br />
                  JNCASR, Jakkur
                </li>
                <li>
                  <strong>Prof. P. Ramasamy</strong><br />
                  Dean Research, SSN Institutions, Chennai
                </li>
                <li>
                  <strong>Dr. Debdatta Ratna</strong><br />
                  Scientist G, Head, Polymer Science and Technology Directorate<br />
                  NMRL - DRDO, Ambernath
                </li>
                <li>
                  <strong>Prof. Vijayamohanan K. Pillai</strong><br />
                  Professor, Indian Institute of Science Education and Research, Tirupati
                </li>
                <li>
                  <strong>Dr. R. Kumar</strong><br />
                  Scientist G, Associate Director<br />
                  DRDO - Defence Food Research Laboratory, Mysore
                </li>
                <li>
                  <strong>Dr. E. Murugan</strong><br />
                  Scientist G, Professor & Head, Dean Research<br />
                  Department of Physical Chemistry, University of Madras
                </li>
              </ul>
              <ul style={{listStyle: "none"}}>
                <li>
                  <strong>Dr. M. Manivel Raja</strong><br />
                  Advanced Magnetics Group, Defence Metallurgical Research Laboratory, Hyderabad
                </li>
                <li>
                  <strong>Dr. Lakshman Neelakantan</strong><br />
                  Professor, Department of Metallurgical and Materials Engineering, Indian Institute of Technology, Madras
                </li>
                <li>
                  <strong>Dr. Sudakar Chandran</strong><br />
                  Professor, Department of Physics, Indian Institute of Technology, Madras
                </li>
                <li>
                  <strong>Dr. K. Kadirvelu</strong><br />
                  DRDO, Bharathiar University Centre for Life Science
                </li>
                <li>
                  <strong>Dr. Venkata Krishnan</strong><br />
                  Professor, School of Chemical Sciences, Indian Institute of Technology, Mandi
                </li>
                <li>
                  <strong>Dr. P. Sakthivel</strong><br />
                  Professor, Department of Nanoscience and Technology, Bharathiar University
                </li>
              </ul>
              </div>
            </section>
          </div>
        );
      case "registration":
        return (
          <div className="content">
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
          <li>Last date for Abstract Submission : 10 Dec 2024</li>
          <li>Intimation of Acceptance : 10 Dec 2024</li>
          <li>Last date for Ful Paper Submission: 13 Dec 2024</li>
          <li>Last date for Registration(Presenter / Participation) : 18 Dec 2024</li>
        </ul>
      </section>
      <section className="committee">
        <h2>Bank Account Details for Registration</h2>
        <ul>
          <li>Account Number  :1481267367   </li>
          <li>Account Holder  :PSG Center for Non formal and Continuing Education (PSG CNCE) </li>
          <li>Name of the Bank:Central Bank of India</li>
          <li>Branch          :Peelamedu</li>
          <li>IFSC Code       :CBIN0280913</li>
        </ul>
      </section>
      <section className="committee">
        <h2>Registration Form</h2>
        <ul>
          
        </ul>
      </section>
      
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="home">
        <nav className="nav">
          <img src={logo} alt="" className="logo" />
          <ul className="navbar">
            <li onClick={() => setActiveSection("about")} className={activeSection === "about" ? "active" : ""}>About</li>
            <li onClick={() => setActiveSection("members")} className={activeSection === "members" ? "active" : ""}>Members</li>
            <li onClick={() => setActiveSection("registration")} className={activeSection === "registration" ? "active" : ""}>Registration</li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ fontSize: 14, color: 'white',marginRight:10 }}>In Nation building since 1926</h3>
            <img src={logo1} alt="" className="logo" style={{ marginRight: 30 }} />
          </div>
        </nav>
        <header className="header">
          <img src={psg} alt="" className="psg" id="image-with-fade" />
          <h1>
            National Conference on Advances in<br />  Material Science<br />  and Technology<br />
            (AMST 2024)<br /><br />   27 – 28 December 2024
          </h1>
        </header>

        <div className="rightside">
          {renderContent()}
        </div>
        
      </div>
      <footer className="footer">
        <p>© 2024 PSG College of Technology. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
