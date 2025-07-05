import React from 'react';

const EventsArea = () => {
  return (
    <div className="events-area-2 pt-100">
      <div className="container">
        <div className="section-title section-title-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="sub-title">
            <p>Berita and Events</p>
          </div>
          <h2>Recent Important Stories Updated</h2>
        </div>

        {/* Top Event */}
        <div className="event lg aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="content">
            <div className="image">
              <img src="/img/events-image-1.png" alt="image" />
            </div>
            <div className="text">
              <div className="tag">Featured News</div>
              <h2>
                <a href="#blog-details">
                  Menavigasi Dunia Akademik: Tips dan Cerita dari Mahasiswa IKPMJ
                </a>
              </h2>
              <span>October 06, 2024</span>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority havesu fered alteration in some form, by
                injected humour.
              </p>
              <div className="link">
                <a href="#blog-details"><i className="bx bx-link-external"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Post & Event */}
        <div className="row">
          <div className="col-lg-8">
            <div className="recent-post">
              <h4 data-aos="fade-zoom-in" data-aos-delay="100" className="aos-init aos-animate">
                Recent News
              </h4>
              <div className="event aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                  <div className="image">
                    <img src="/img/events-image-2.png" alt="image" />
                  </div>
                  <div className="text">
                    <div className="tag">News</div>
                    <h2>
                      <a href="#blog-details">
Mahasiswa IKPMJ Sabet Juara Lomba Inovasi Teknologi Nasional
                      </a>
                    </h2>
                    <span>October 06, 2024</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum avala
                      fered alteration in some form.
                    </p>
                    <div className="link">
                      <a href="#blog-details"><i className="bx bx-link-external"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="event aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="content">
                  <div className="image">
                    <img src="/img/events-image-3.png" alt="image" />
                  </div>
                  <div className="text">
                    <div className="tag">News</div>
                    <h2>
                      <a href="#blog-details">
Kolaborasi IKPMJ dengan LSM untuk Edukasi Anak Daerah
                      </a>
                    </h2>
                    <span>October 06, 2024</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum avala
                      fered alteration in some form.
                    </p>
                    <div className="link">
                      <a href="#blog-details">
                        <i className="bx bx-link-external"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="upcoming-event">
              <h4 data-aos="fade-zoom-in" data-aos-delay="100" className="aos-init aos-animate">
                Upcoming Events
              </h4>

              <div className="event-dates aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="date">
                  <ul>
                    <li className="mnt">Oct</li>
                    <li className="det">07</li>
                  </ul>
                </div>
                <div className="content">
                  <h3>
                    <a href="#blog-details">
                     Diskusi Publik: Peran Mahasiswa Jember dalam Pembangunan Daerah
                    </a>
                  </h3>
                  <p>
                    Seamlessly visualize quality ellectua capital without super.
                  </p>
                  <div className="location">
                    <i className="bx bx-map"></i> Canyon Grand Hall
                  </div>
                  <div className="link">
                    <a href="#blog-details">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="event-dates aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="date">
                  <ul>
                    <li className="mnt">Oct</li>
                    <li className="det">09</li>
                  </ul>
                </div>
                <div className="content">
                  <h3>
                    <a href="#">Makrab IKPMJ</a>
                  </h3>
                  <p>
                    Seamlessly visualize quality ellectua capital without super.
                  </p>
                  <div className="location">
                    <i className="bx bx-map"></i> Canyon Grand Hall
                  </div>
                  <div className="link">
                    <a href="#"><i className="bx bx-link-external"></i></a>
                  </div>
                </div>
              </div>
              
              <div className="event-dates aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div className="date">
                  <ul>
                    <li className="mnt">Oct</li>
                    <li className="det">19</li>
                  </ul>
                </div>
                <div className="content">
                  <h3>
                    <a href="#blog-details">
                      Pertunjukan seni partol IKPMJ
                    </a>
                  </h3>
                  <p>
                    Seamlessly visualize quality ellectua capital without super.
                  </p>
                  <div className="location">
                    <i className="bx bx-map"></i> Canyon Grand Hall
                  </div>
                  <div className="link">
                    <a href="#blog-details">
                      <i className="bx bx-link-external"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="event-dates aos-init aos-animate" data-aos="fade-zoom-in" data-aos-delay="100">
                <a className="btn" href="#news-and-blog">
                  View More Events <i className="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsArea; 