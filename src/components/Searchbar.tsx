'use client';

import Link from 'next/link';

export default function Searchbar() {
  return (
    <div className="clgun">
      <div className="search-box">
        <div className="searchwrapper">
          <div className="searchbox">
            <div className="row align-items-center">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fiend Your Course Here!"
                />
              </div>
              <div className="col-lg-3">
                <a className="btn" href="#">Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas-contact-info">
        <h4>Contact Info</h4>
        <ul className="contact-info list-style">
          <li>
            <i className="bx bxs-time"></i>
            <p>Mon - Fri: 9:00 - 18:00</p>
          </li>
          <li>
            <i className="bx bxs-phone-call"></i> General Inquiries -
            <a href="tel:+8495160885">(849) 516-0885</a>
          </li>
          <li>
            <i className="bx bxs-envelope"></i>
            <a href="mailto:contact@Clgunme.edu">contact@Clgunme.edu</a>
          </li>
          <li>
            <i className="bx bxs-map"></i>
            <p>404 Camino Del Rio S, Suite 102San Diego, CA 92108</p>
          </li>
        </ul>
        <ul className="social-profile list-style">
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.dribbble.com/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-dribbble"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 