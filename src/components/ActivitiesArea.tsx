import React from 'react';

const ActivitiesArea = () => {
  return (
    <div className="activities-area ptb-100">
      <div className="container">
        <div className="section-title section-title-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="sub-title">
            <p>Sports and Athletics</p>
          </div>
          <h2>Beyond the Bleachers: Diverse Sports &amp; Activities</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="activities-card style-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="image">
                <img src="/img/activities-image-1.png" alt="image" />
              </div>
              <div className="content">
                <h2><a href="#student-activities">Home of Champions</a></h2>
                <p>
                  There are many variations of passages of Lorem Ipsum aviable
                  but the majority have suffered alteration in some form.
                </p>
                <a className="btn" href="#student-activities">National Championships</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6 pt-25">
            <div className="activities-card style-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="image">
                <img src="/img/activities-image-2.png" alt="image" />
              </div>
              <div className="content">
                <h2><a href="#support-guidance">Olympic Excellence</a></h2>
                <p>
                  There are many variations of passages of Lorem Ipsum aviable
                  but the majority have suffered alteration in some form.
                </p>
                <a className="btn" href="#support-guidance">Medals</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="activities-card style-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="image">
                <img src="/img/activities-image-3.png" alt="image" />
              </div>
              <div className="content">
                <h2>
                  <a href="#fitness-athletics">Multidimensional Impact</a>
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum aviable
                  but the majority have suffered alteration in some form.
                </p>
                <a className="btn" href="#fitness-athletics">Athlete Stories</a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-btn text-center aos-init aos-animate" data-aos="fade-zoom-in" data-aos-delay="100">
          <p>
            Inspiring Minds, Shaping Futures.
            <a href="#fitness-athletics">
              More About Athletics <i className="bx bx-right-arrow-alt"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesArea; 