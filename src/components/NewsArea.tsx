import React from 'react';

const NewsArea = () => {
  return (
    <div className="news-area ptb-100">
      <div className="container">
        <div className="section-title section-title-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="sub-title">
            <p>Campus News</p>
          </div>
          <h2>Stories About People, Research, and Innovation Across The Farm</h2>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="news-content">
              <ul>
                <li className="news-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  <div className="image">
                    <img src="/img/news-image-1.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="sub-title">
                      <i className="bx bxs-graduation"></i>
                      <p>Science and technology</p>
                    </div>
                    <h2>
                      <a href="#blog-details">Robot Provides Personalized Room Cleanup</a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipiscingl sed do eiusm tem incid idunt ut labore.
                    </p>
                    <a className="btn" href="#blog-details">Continue Reading...</a>
                  </div>
                </li>
                <li className="news-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <div className="image">
                    <img src="/img/news-image-2.png" alt="image" />
                  </div>
                  <div className="content">
                    <div className="sub-title">
                      <i className="bx bxs-graduation"></i>
                      <p>Law and Policy</p>
                    </div>
                    <h2>
                      <a href="#blog-details">Learning Network Webinars for Music Teachers</a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipiscingl sed do eiusm tem incid idunt ut labore.
                    </p>
                    <a className="btn" href="#blog-details">Continue Reading...</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="news-content-right aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="content-box">
                <img src="/img/news-image-3.png" alt="iamge" />
                <div className="content">
                  <h3>
                    <a href="#blog-details">Gender inequality in higher education persists</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conse sed do eiusm tem incid idunt ut labore.
                  </p>
                  <a className="btn" href="#blog-details">Continue Reading...</a>
                </div>
              </div>
            </div>
            <div className="news-content-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="content-box">
                <div className="image">
                  <img src="/img/news-image-4.png" alt="image" />
                </div>
                <div className="content">
                  <div className="sub-title">
                    <i className="bx bxs-graduation"></i>
                    <p>Medicine</p>
                  </div>
                  <h3>
                    <a href="#blog-details">Empowering Health, One Patient at a Time.</a>
                  </h3>
                </div>
              </div>
              <div className="content-box">
                <div className="image">
                  <img src="/img/news-image-5.png" alt="image" />
                </div>
                <div className="content">
                  <div className="sub-title">
                    <i className="bx bxs-graduation"></i>
                    <p>Student Life</p>
                  </div>
                  <h3>
                    <a href="#blog-details">Every Student, Every Dream, Every Success.</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-btn text-center aos-init aos-animate" data-aos="fade-zoom-in" data-aos-delay="100">
          <p>
            Where Dreams Take Flight.
            <a href="#news-and-blog">
              More Campus News <i className="bx bx-right-arrow-alt"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsArea; 