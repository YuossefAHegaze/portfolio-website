
import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className="navbar-wrapper">
    <Navbar
      expand="lg"
      fixed="top"
        variant="dark"
      className={`custom-navbar ${scrolled ? "navbar-shrink" : ""}`}
    >
      <Container>

        <Link className="navbar-brand text-light" to="/">
          Youssef Ahmed
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav"  />

        <Navbar.Collapse id="basic-navbar-nav">

          {/* Desktop Menu */}
          <Nav className="ms-auto d-none d-lg-flex ">
            <Link
              to="/about"
              className="nav-link btn btn-outline-dark text-light"
            >
              Know me
            </Link>

            <Link
              to="/"
              className="nav-link btn btn-outline-dark text-light"
            >
              My Work
            </Link>

            <Link
              to="/connect"
              className="nav-link btn btn-outline-dark text-light"
            >
              Let's Connect <GoArrowUpRight />
            </Link>
          </Nav>

          {/* Mobile Menu */}
          <Nav className="ms-auto d-lg-none text-center mt-3">
            <Link to="/about" className="nav-link text-light">
              Know me
            </Link>

            <Link to="/" className="nav-link text-light">
              My Work
            </Link>

            <Link to="/connect" className="nav-link text-light">
              Let's Connect <GoArrowUpRight />
            </Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  </div>
  );
}

export default MyNavbar;
