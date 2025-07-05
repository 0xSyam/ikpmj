import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IKPMJ - Ikatan Keluarga Pelajar dan Mahasiswa Jember di Yogyakarta',
  description: 'Template universitas yang dikonversi ke Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Link CSS yang dikelompokkan dengan baik */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/boxicons.min.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/header.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
      </head>
      <body>
        {children}

        {/* Scripts yang diurutkan dengan benar */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script 
          src="/js/bootstrap.min.js" 
          strategy="afterInteractive" 
        />
        <Script src="/js/aos.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        
        {/* Script untuk membuat navbar terlihat secara paksa */}
        <Script id="force-navbar" strategy="lazyOnload">
          {`
            window.addEventListener('load', function() {
              setTimeout(function() {
                const navbar = document.querySelector('.navbar-area');
                if (navbar) {
                  console.log('Navbar found, forcing display');
                  navbar.style.display = 'block';
                  navbar.style.opacity = '1';
                  navbar.style.visibility = 'visible';
                  navbar.style.position = 'relative';
                  navbar.style.zIndex = '1000';
                } else {
                  console.log('Navbar not found in DOM');
                }

                // Inisialisasi Bootstrap dropdown dan collapse
                try {
                  if (typeof bootstrap !== 'undefined') {
                    console.log('Bootstrap loaded, initializing components');
                    
                    // Inisialisasi dropdown
                    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
                    dropdownElementList.map(function (dropdownToggleEl) {
                      return new bootstrap.Dropdown(dropdownToggleEl);
                    });
                    
                    // Inisialisasi collapse
                    const collapseElementList = [].slice.call(document.querySelectorAll('.accordion-collapse'));
                    collapseElementList.map(function (collapseEl) {
                      return new bootstrap.Collapse(collapseEl, {
                        toggle: false
                      });
                    });
                    
                    // Inisialisasi offcanvas
                    const offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
                    offcanvasElementList.map(function (offcanvasEl) {
                      return new bootstrap.Offcanvas(offcanvasEl, {
                        backdrop: true
                      });
                    });
                  } else {
                    console.error('Bootstrap not loaded');
                  }
                } catch (error) {
                  console.error('Error initializing Bootstrap components:', error);
                }
              }, 500); // Delay to ensure DOM is fully loaded
            });
          `}
        </Script>
      </body>
    </html>
  );
}
