function Navbar({ onPatientRecordClick }) {
return ( <nav className="navbar"> <div className="nav-container">

    <div className="logo">
      <span className="logo-icon">
        <img 
        src={`${process.env.PUBLIC_URL}/images/logo.png`} 
        alt="Dr. Ashwani Rana" 
        className="logo-img" 
        />
      </span>

      <div>
        <h2>Ashwani Clinic</h2>
        <p>Ayurvedic Care</p>
      </div>
    </div>

    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#achievements">Achievements</a>
      <a href="#map">Contact</a>
      <a href="#timings">Timings</a>
    </div>

    <a href="tel:9996407016" className="nav-button">
      Call Now
    </a>

  </div>
</nav>
);
}

export default Navbar;
