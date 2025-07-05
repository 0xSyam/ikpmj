"use client";

import React from 'react';
// If useState is to be used, it should be imported:
// import React, { useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link'; // Will be used later

const Navbar: React.FC = () => {
  // Placeholder for state and effects for interactivity (e.g., mobile menu toggle, dropdowns)
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Placeholder for event handlers
  // const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  // const handleDropdownToggle = (dropdownName: string) => {
  //   setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  // };

  return (
    <>
      {/* Start Navbar Area */}
      <div className="navbar-area style-2" id="navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="https://lovely-bavarois-b19658.netlify.app/">
              {/* Replace with Link component later */}
              <Image className="logo-light" src="/img/ikpmj.png" alt="logo" width={150} height={40} style={{ height: "auto" }} />
              <Image className="logo-dark" src="/img/IKPMJ-DARk.png" alt="logo" width={150} height={40} style={{ height: "auto" }} />
            </a>
            <div className="other-option d-lg-none">
              <div className="option-item">
                <button type="button" className="search-btn" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
            <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#navbarOffcanvas" role="button" aria-controls="navbarOffcanvas">
              {/* This will need JS to toggle the offcanvas */}
              <i className="bx bx-menu"></i>
            </a>
            <div className="collapse navbar-collapse justify-content-between">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="dropdown-toggle nav-link">
                    Profile
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" href="#">Struktur</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Kabinet</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Berita & Media
                  </a>
                </li>
              </ul>
              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <div className="nav-btn">
                    <a className="default-btn" href="https://lovely-bavarois-b19658.netlify.app/contact-us">Hubungi Kami</a>
                  </div>
                </div>
                <div className="option-item">
                  <div className="nav-search">
                    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" className="search-button"><i className="bx bx-search"></i></a>
                    {/* This will need JS to toggle the search offcanvas */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* End Navbar Area */}

      {/* Start Responsive Navbar Area */}
      <div className="responsive-navbar offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex={-1} id="navbarOffcanvas">
        <div className="offcanvas-header">
          <a className="logo d-inline-block" href="https://lovely-bavarois-b19658.netlify.app/">
            {/* Replace with Link component later */}
            <Image className="logo-light" src="/img/logo.png" alt="logo" width={150} height={40} style={{ height: "auto" }} />
          </a>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          {/* This button will need JS to close the offcanvas */}
        </div>
        <div className="offcanvas-body">
          <div className="accordion" id="navbarAccordion">
            {/* Home Accordion Item */}
            <div className="accordion-item">
              <a className="accordion-link without-icon active" href="#">
                Home
              </a>
            </div>
            {/* Profile Accordion Item */}
            <div className="accordion-item">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Profile
              </button>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
                <div className="accordion-body">
                  <div className="accordion" id="navbarAccordion8">
                    <div className="accordion-item"><a className="accordion-link" href="#">Struktur</a></div>
                    <div className="accordion-item"><a className="accordion-link" href="#">Kabinet</a></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Berita & Media Accordion Item */}
            <div className="accordion-item">
              <a className="accordion-link without-icon" href="#">
                Berita & Media
              </a>
            </div>
          </div>
          <div className="offcanvas-contact-info">
            <h4>Contact Info</h4>
            <ul className="contact-info list-style">
              <li>
                <i className="bx bxs-envelope"></i>
                <a href="mailto:contact@Clgunme.edu">contact@Clgunme.edu</a>
              </li>
              <li>
                <i className="bx bxs-time"></i>
                <p>Mon - Fri: 9:00 - 18:00</p>
              </li>
            </ul>
            <ul className="social-profile list-style">
              <li><a href="https://www.fb.com/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a></li>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="offcanvas-other-options">
            <div className="option-item">
              <a className="default-btn" href="https://lovely-bavarois-b19658.netlify.app/contact-us">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      {/* End Responsive Navbar Area */}
    </>
  );
};

export default Navbar;
