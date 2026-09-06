import React, { useEffect ,useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import bgimg from "./img/burger.png";
import "./App.css";
import Login from "./login"; 

const App = () => {

  const[page,setPage]=useState("home");

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  return (
    <div className="app">
      {page === "home" && (<>
      <Header setPage={setPage}/>
      <HeroSection />
      <MenuSection />
       <Footer setPage={setPage} />
      </>
      )}

      {page === "login" && (
        <Login setPage={setPage}/>
      )}

    </div>
  );
};


function Header({setPage}) {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Tasty Bites</h1>

        <ul className="nav-links">
          <li>
            <a href="#hero" className="nav-link"> Home </a>
          </li>

          <li>
            <a href="#menu" className="nav-link"> Menu  </a>
          </li>

          <li>
            <a href="#specials" className="nav-link">  Specials  </a>
          </li>

          <li>
            <a href="#contact" className="nav-link"> Contact </a>
          </li>

          <li>
            <a href="#" className="login-button"  onClick={(e) => {
            e.preventDefault();
            setPage("login");
          }}> Login </a>
          </li>
          
           <li>
            <a href="/login" className="login-button" onClick={()=>setPage("register")}> Register </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}


function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        <h2 className="hero-title">Welcome to Tasty Bites</h2>

        <p className="hero-subtitle">
          Indulge in gourmet burgers and delicious meals
        </p>

        <button className="cta-button">Explore Menu</button>
      </div>

      <div className="hero-image" data-aos="fade-left">
        <img
          src={bgimg}
          className="hero-img"
          alt="Tasty Bites Burger"
        />
      </div>
    </section>
  );
}


function MenuSection() {
  const menuItems = [
    "Cheesy Deluxe",
    "Classic Beef Burger",
    "Spicy Chicken Burger",
  ];

  return (
    <section id="menu" className="menu-section">
      <h2 className="menu-title" data-aos="fade-up"> Our Menu </h2>

      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div
            className="menu-item"
            key={index}
            data-aos="fade-up"
          >
            <h3>{item}</h3>
            <p>Delicious and freshly prepared for you.</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">Tasty Bites</h2>

          <p>
            Delicious food, fresh ingredients, and happy moments. Enjoy our mouth-watering meals with your loved ones.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>

            <li>
              <a href="#menu">Menu</a>
            </li>

            <li>
              <a href="#specials">Specials</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ tastybites@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-links">

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Tasty Bites. All Rights Reserved.
        </p>


      </div>

    </footer>
  );
}

export default App;