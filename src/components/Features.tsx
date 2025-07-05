import React from 'react';

const Features = () => {
  return (
    <div className="features-area-2">
      <div className="features-content-2 ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="sub-title">
                <p>Program Kerja IKPMJ</p>
              </div>
              <div className="content">
                <h2>Wujud Nyata Semangat Kekeluargaan dalam Setiap Kegiatan.</h2>
                <div className="item">
                  <div className="item-content">
                    <div className="icon">
                      <img src="/img/features-icon-2.png" alt="image" />
                    </div>
                    <h3>Layanan Pendidikan IKPMJ</h3>
                    <p>
                      IKPMJ menyediakan bimbingan dan dukungan bagi pelajar dan
                      mahasiswa Jember di Yogyakarta untuk mencapai prestasi
                      akademik dan mempersiapkan karir masa depan.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="item-content">
                    <div className="icon">
                      <img src="/img/features-icon-1.png" alt="image" />
                    </div>
                    <h3>Program Adaptif &amp; Inklusif</h3>
                    <p>
                      Kegiatan kami dirancang secara fleksibel untuk mendukung
                      kebutuhan setiap anggota, memastikan semua dapat
                      berpartisipasi aktif dalam keluarga besar IKPMJ.
                    </p>
                  </div>
                </div>
                <a className="default-btn" href="#admission">Program Kerja Lainya</a>

                <div className="arrow-icon">
                  <img src="/img/shape-1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="academic-content">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6 pt-25">
                    <div className="academic-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <div className="image">
                        <img src="/img/academic-image-1.png" alt="image" />
                        <div className="number">
                          <h3>01</h3>
                        </div>
                      </div>
                      <div className="content">
                        <h4>IKPMJ Apresiasi</h4>
                        <a className="btn" href="#fitness-athletics">
                          Learn More <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="academic-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                      <div className="image">
                        <img src="/img/academic-image-2.png" alt="image" />
                        <div className="number">
                          <h3>02</h3>
                        </div>
                      </div>
                      <div className="content">
                        <h4>Pekan Seni IKPMJ</h4>
                        <a className="btn" href="#support-guidance">
                          Learn More <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 pt-25">
                    <div className="academic-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                      <div className="image">
                        <img src="/img/academic-image-3.png" alt="image" />
                        <div className="number">
                          <h3>03</h3>
                        </div>
                      </div>
                      <div className="content">
                        <h4>IKPMJ Olahraga</h4>
                        <a className="btn" href="#university-life">
                          Learn More <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="academic-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                      <div className="image">
                        <img src="/img/academic-image-4.png" alt="image" />
                        <div className="number">
                          <h3>04</h3>
                        </div>
                      </div>
                      <div className="content">
                        <h4>Sosialisasi Kampus</h4>
                        <a className="btn" href="#the-campus-experience">
                          Learn More <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
