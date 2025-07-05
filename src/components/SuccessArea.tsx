import React from 'react';

const SuccessArea = () => {
  return (
    <div className="success-area success-area-2 ptb-100">
      <div className="container">
        <div className="section-title section-title-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="sub-title">
            <p>Student, Faculty and Alumni Success</p>
          </div>
          <h2>Celebrating the Legacy, Embracing the Future</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="success-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="image">
                <img src="/img/success-image-1.png" alt="image" />
              </div>
              <div className="content">
                <div className="play">
                  <a className="popup-youtube" href="https://www.youtube.com/watch?v=LlCwHnp3kL4">
                    <i className="bx bx-play"></i>
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="#university-life"><h3>Amelia Harper &apos;23 (BA)</h3></a>
                  </li>
                  <li className="link">
                    <a href="#university-life">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="success-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="image">
                <img src="/img/success-image-2.png" alt="image" />
              </div>
              <div className="content">
                <div className="play">
                  <a className="popup-youtube" href="https://www.youtube.com/watch?v=LlCwHnp3kL4">
                    <i className="bx bx-play"></i>
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="#university-life"><h3>Oliver Elijah &apos;23 (BS/BA)</h3></a>
                  </li>
                  <li className="link">
                    <a href="#university-life">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="success-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="image">
                <img src="/img/success-image-3.png" alt="image" />
              </div>
              <div className="content">
                <div className="play">
                  <a className="popup-youtube" href="https://www.youtube.com/watch?v=LlCwHnp3kL4">
                    <i className="bx bx-play"></i>
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="#university-life"><h3>Sofia Grace &apos;15 (BA)</h3></a>
                  </li>
                  <li className="link">
                    <a href="#university-life">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-btn text-center aos-init aos-animate" data-aos="fade-zoom-in" data-aos-delay="100">
          <p>
            Inspiring Minds, Shaping Futures.
            <a href="#undergraduate">
              Learn about the USD Honors Program
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessArea; 