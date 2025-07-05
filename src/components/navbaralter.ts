// "use client";

// import React from 'react';
// // If useState is to be used, it should be imported:
// // import React, { useState } from 'react';
// import Image from 'next/image';
// // import Link from 'next/link'; // Will be used later

// const Navbar: React.FC = () => {
//   // Placeholder for state and effects for interactivity (e.g., mobile menu toggle, dropdowns)
//   // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   // Placeholder for event handlers
//   // const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   // const handleDropdownToggle = (dropdownName: string) => {
//   //   setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
//   // };

//   return (
//     <>
//       {/* Start Navbar Area */}
//       <div className="navbar-area style-2" id="navbar">
//         <div className="container-fluid">
//           <nav className="navbar navbar-expand-lg">
//             <a className="navbar-brand" href="https://lovely-bavarois-b19658.netlify.app/">
//               {/* Replace with Link component later */}
//               <Image className="logo-light" src="/img/ikpmj.png" alt="logo" width={150} height={40} style={{ height: "auto" }} />
//               <Image className="logo-dark" src="/img/IKPMJ-DARk.png" alt="logo" width={150} height={40} style={{ height: "auto" }} />
//             </a>
//             <div className="other-option d-lg-none">
//               <div className="option-item">
//                 <button type="button" className="search-btn" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop">
//                   <i className="bx bx-search"></i>
//                 </button>
//               </div>
//             </div>
//             <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#navbarOffcanvas" role="button" aria-controls="navbarOffcanvas">
//               {/* This will need JS to toggle the offcanvas */}
//               <i className="bx bx-menu"></i>
//             </a>
//             <div className="collapse navbar-collapse justify-content-between">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                   <a href="#" className="nav-link active">
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="dropdown-toggle nav-link">
//                     Tentang Kami
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/about-us">Profil Organisasi</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/news-and-blog">Visi & Misi</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/blog-details">Sejarah</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/alumni">Sambutan Ketua</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/alumni">Struktur Organisasi</a></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="dropdown-toggle nav-link">
//                     Program Kerja
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/academics">Program Unggulan</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/undergraduate">Kegiatan Rutin</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/graduate">Laporan Kegiatan</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/online-education">Kalender Kegiatan</a></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="dropdown-toggle nav-link">
//                     Berita & Media
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/admission">Berita Terkini</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/how-to-apply">Pengumuman</a></li>
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/tuition-fees">Galeri Kegitan</a></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <a href="#" className="dropdown-toggle nav-link">
//                     Beasiswa
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li className="nav-item"><a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/courses">Info Beasiswa</a></li>

//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="https://lovely-bavarois-b19658.netlify.app/contact-us">
//                   Galeri
//                   </a>
//                 </li>
//               </ul>
//               <div className="others-option d-flex align-items-center">
//                 <div className="option-item">
//                   <div className="nav-btn">
//                     <a className="default-btn" href="https://lovely-bavarois-b19658.netlify.app/contact-us">Hubungi Kami</a>
//                   </div>
//                 </div>
//                 <div className="option-item">
//                   <div className="nav-search">
//                     <a href="#" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" className="search-button"><i className="bx bx-search"></i></a>
//                     {/* This will need JS to toggle the search offcanvas */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//       {/* End Navbar Area */}

//       {/* Start Responsive Navbar Area */}
//       <div className="responsive-navbar offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex={-1} id="navbarOffcanvas">
//         <div className="offcanvas-header">
//           <a className="logo d-inline-block" href="https://lovely-bavarois-b19658.netlify.app/">
//             {/* Replace with Link component later */}
//             <Image className="logo-light" src="/img/logo.png" alt="logo" width={150} height={40} style={{ height: "auto" }} />
//           </a>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//           {/* This button will need JS to close the offcanvas */}
//         </div>
//         <div className="offcanvas-body">
//           <div className="accordion" id="navbarAccordion">
//             {/* Home Accordion Item */}
//             <div className="accordion-item">
//               <button className="accordion-button collapsed active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
//                 Home
//               </button>
//               <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
//                 <div className="accordion-body">
//                   <div className="accordion" id="navbarAccordion7">
//                     <div className="accordion-item">
//                       <a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/">Home One</a>
//                     </div>
//                     <div className="accordion-item">
//                       <a className="accordion-link active" href="https://lovely-bavarois-b19658.netlify.app/index2">Home Two</a>
//                     </div>
//                     <div className="accordion-item">
//                       <a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/index3">Home Three</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Pages Accordion Item */}
//             <div className="accordion-item">
//               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                 Pages
//               </button>
//               <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
//                 <div className="accordion-body">
//                   <div className="accordion" id="navbarAccordion8">
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/about-us">About Us</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/news-and-blog">News and Blog</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/blog-details">Blog Details</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/alumni">Alumni</a></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Academics Accordion Item */}
//             <div className="accordion-item">
//               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                 Academics
//               </button>
//               <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
//                 <div className="accordion-body">
//                   <div className="accordion" id="navbarAccordion30">
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/academics">Academics</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/undergraduate">Undergraduate</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/graduate">Graduate</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/online-education">Online Education</a></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Admissions Accordion Item */}
//             <div className="accordion-item">
//               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                 Admissions
//               </button>
//               <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
//                 <div className="accordion-body">
//                   <div className="accordion" id="navbarAccordion31">
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/admission">Admissions</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/how-to-apply">How to Apply</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/tuition-fees">Tuition &amp; Fees</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/financial-aid">Financial Aid</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/date-deadlines">Date &amp; Deadlines</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/schedule-tour">Schedule a Tour</a></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Courses Accordion Item */}
//             <div className="accordion-item">
//               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//                 Courses
//               </button>
//               <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
//                 <div className="accordion-body">
//                   <div className="accordion" id="navbarAccordion32">
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/courses">Courses Sidebar</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/courses-details">Course Details</a></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* University Life Accordion Item */}
//             <div className="accordion-item">
//               <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
//                 University Life
//               </button>
//               <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
//                 <div className="accordion-body">
//                   <div className="accordion" id="navbarAccordion40">
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/university-life">University Life</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/the-campus-experience">The Campus Experience</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/fitness-athletics">Fitness &amp; Athletics</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/support-guidance">Support &amp; Guidance</a></div>
//                     <div className="accordion-item"><a className="accordion-link" href="https://lovely-bavarois-b19658.netlify.app/student-activities">Student Activities</a></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Contact Us Accordion Item */}
//             <div className="accordion-item">
//               <a className="accordion-link without-icon" href="https://lovely-bavarois-b19658.netlify.app/contact-us">
//                 Contact Us
//               </a>
//             </div>
//           </div>
//           <div className="offcanvas-contact-info">
//             <h4>Contact Info</h4>
//             <ul className="contact-info list-style">
//               <li>
//                 <i className="bx bxs-envelope"></i>
//                 <a href="mailto:contact@Clgunme.edu">contact@Clgunme.edu</a>
//               </li>
//               <li>
//                 <i className="bx bxs-time"></i>
//                 <p>Mon - Fri: 9:00 - 18:00</p>
//               </li>
//             </ul>
//             <ul className="social-profile list-style">
//               <li><a href="https://www.fb.com/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a></li>
//               <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a></li>
//               <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a></li>
//             </ul>
//           </div>
//           <div className="offcanvas-other-options">
//             <div className="option-item">
//               <a className="default-btn" href="https://lovely-bavarois-b19658.netlify.app/contact-us">Contact Us</a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* End Responsive Navbar Area */}
//     </>
//   );
// };

// export default Navbar;
