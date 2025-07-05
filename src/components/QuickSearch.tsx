import React from 'react';

const QuickSearch = () => {
  return (
    <div className="quick-search style-2 ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="course-search-box aos-init aos-animate" data-aos="fade-right">
              <h4>Search For Courses</h4>
              <div className="search-key">
                <input className="form-control" placeholder="Keywords" type="search" id="searchKey1" />
                <input className="form-control" placeholder="Course ID" type="search" id="searchKey" />

                <select className="form-select" aria-label="Default select example" id="searchKey2">
                  <option value="">Department</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select className="form-select" aria-label="Default select example" id="searchKey3">
                  <option value="">Campus</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select className="form-select" aria-label="Default select example" id="searchKey4">
                  <option value="">Level</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select className="form-select" aria-label="Default select example" id="searchKey5">
                  <option value="">Instructor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select className="form-select" aria-label="Default select example" id="searchKey6">
                  <option value="">Semester</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <select className="form-select" aria-label="Default select example" id="searchKey7">
                  <option value="">Credit</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <a className="default-btn" href="#">Search Courses</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="quick-content aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="sub-title">
                <p>Campus News</p>
              </div>
              <h2>Start Your Career &amp; Pursue Your Passion</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readablecont of a page when looking at its layout. The
                point of using Lorem Ipsum is that it ha more-or-less normal
                distribution of letters, as opposed to using.
              </p>

              <div className="list">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="list-items">
                      <ul>
                        <li>
                          <i className="bx bx-right-arrow-circle"></i> Alumni &amp; Donors
                        </li>
                        <li>
                          <i className="bx bx-right-arrow-circle"></i> Athletic Calendar
                        </li>
                        <li>
                          <i className="bx bx-right-arrow-circle"></i> All Canyon Events
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="list-items">
                      <ul>
                        <li>
                          <i className="bx bx-right-arrow-circle"></i> Partnership &amp; Out Reach
                        </li>
                        <li>
                          <i className="bx bx-right-arrow-circle"></i> Academic Programs
                        </li>
                        <li>
                          <i className="bx bx-right-arrow-circle"></i> Tution And Fees
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="apply-banner">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <p>Apply for Admission</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6 text-end">
                    <a className="default-btn" href="#application-form">Apply Now</a>
                  </div>
                </div>
              </div>

              <div className="user-exprience">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="user-info">
                      <div className="image">
                        <img src="/img/admin-image.png" alt="image" />
                      </div>
                      <div className="text">
                        <h4>John Michael</h4>
                        <p>Founder</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="exprience">
                      <div className="icon">
                        <img src="/img/trophy-star.png" alt="image" />
                      </div>
                      <div className="text">
                        <h4>20</h4>
                        <p>
                          Years of <br />
                          Experience
                        </p>
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

export default QuickSearch; 