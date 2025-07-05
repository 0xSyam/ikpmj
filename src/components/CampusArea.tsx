import React from 'react';

const CampusArea = () => {
  return (
    <div className="campus-area-2 ptb-100">
      <div className="container-fluaid">
        <div className="section-title section-title-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="sub-title">
            <p>Kampus di Yogyakarta</p>
          </div>
          <h2>Menyatukan Pelajar Jember dari Berbagai Kampus dalam Satu Keluarga.</h2>
        </div>

        <div className="campus-slider owl-carousel owl-theme">
          <div className="campus-card" data-aos="fade-up" data-aos-delay="100">
            <img src="/img/campus-image-1.png" alt="image" />
            <div className="content">
              <h2>Universitad Gadjah Mada</h2>
              <a className="default-btn" href="#the-campus-experience">Virtual Tour</a>
            </div>
          </div>

          <div className="campus-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/img/campus-image-2.png" alt="image" />
            <div className="content">
              <h2>Universitas Ngeri Yogyakarta</h2>
              <a className="default-btn" href="#the-campus-experience">Virtual Tour</a>
            </div>
          </div>

          <div className="campus-card" data-aos="fade-up" data-aos-delay="300">
            <img src="/img/campus-image-3.png" alt="image" />
            <div className="content">
              <h2>Universitas Islam Sunan Kalijaga</h2>
              <a className="default-btn" href="#the-campus-experience">Virtual Tour</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusArea;
