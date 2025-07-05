import React from 'react';

const Banner = () => {
  return (
    <div className="banner-area-2 big-bg-2">
      <div className="container">
        <div className="banner-content-2">
          <div className="content">
            <span data-aos="fade-zoom-in" data-aos-delay="300" className="aos-init aos-animate">
              Ikatan Keluarga Pelajar dan Mahasiswa Jember
            </span>
            <h1 data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
              IKPMJ
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
            Organisasi kedaerahan yang menghimpun dan mendukung pelajar serta mahasiswa asal Jember di Yogyakarta melalui komunitas, budaya, dan kolaborasi.
            </p>
            <div className="buttons-action aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <a className="default-btn" href="#application-form">Tentang IKPMJ</a>
              <a className="default-btn btn-style-2" href="#contact-us">Hubungi Kami</a>
            </div>
            <div className="vertical-lr aos-init aos-animate" data-aos="fade-zoom-in" data-aos-delay="100">
              <p>Dibentuk Sejak <span>15-06-1968</span></p>
            </div>
            <div className="scroll-down aos-init aos-animate" data-aos="fade-down" data-aos-delay="100">
              <a href="#about"><i className="bx bx-chevron-down"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner; 