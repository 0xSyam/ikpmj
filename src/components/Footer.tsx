import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer-area">
      <div className="footer-widget-info ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="footer-widget">
                <h4>Tentang IKPMJ</h4>
                <ul>
                  <li>
                    <Link href="/sejarah">
                      <i className="bx bx-chevron-right"></i> Sejarah
                    </Link>
                  </li>
                  <li>
                    <Link href="/visi-misi">
                      <i className="bx bx-chevron-right"></i> Visi & Misi
                    </Link>
                  </li>
                  <li>
                    <Link href="/struktur-organisasi">
                      <i className="bx bx-chevron-right"></i> Struktur Organisasi
                    </Link>
                  </li>
                  <li>
                    <Link href="/ad-art">
                      <i className="bx bx-chevron-right"></i> AD/ART
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontak">
                      <i className="bx bx-chevron-right"></i> Kontak
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="footer-widget">
                <h4>Program Kerja</h4>
                <ul>
                  <li>
                    <Link href="/divisi">
                      <i className="bx bx-chevron-right"></i> Divisi & Departemen
                    </Link>
                  </li>
                  <li>
                    <Link href="/agenda">
                      <i className="bx bx-chevron-right"></i> Agenda Kegiatan
                    </Link>
                  </li>
                  <li>
                    <Link href="/laporan">
                      <i className="bx bx-chevron-right"></i> Laporan Pertanggungjawaban
                    </Link>
                  </li>
                  <li>
                    <Link href="/arsip">
                      <i className="bx bx-chevron-right"></i> Arsip Program
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="footer-widget">
                <h4>Keanggotaan</h4>
                <ul>
                  <li>
                    <Link href="/pendaftaran">
                      <i className="bx bx-chevron-right"></i> Pendaftaran Anggota
                    </Link>
                  </li>
                  <li>
                    <Link href="/database-anggota">
                      <i className="bx bx-chevron-right"></i> Database Anggota
                    </Link>
                  </li>
                  <li>
                    <Link href="/alumni">
                      <i className="bx bx-chevron-right"></i> Jaringan Alumni
                    </Link>
                  </li>
                  <li>
                    <Link href="/manfaat">
                      <i className="bx bx-chevron-right"></i> Manfaat Keanggotaan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="footer-widget">
                <h4>Media & Publikasi</h4>
                <ul>
                  <li>
                    <Link href="/berita">
                      <i className="bx bx-chevron-right"></i> Berita Terkini
                    </Link>
                  </li>
                  <li>
                    <Link href="/galeri">
                      <i className="bx bx-chevron-right"></i> Galeri Kegiatan
                    </Link>
                  </li>
                  <li>
                    <Link href="/artikel">
                      <i className="bx bx-chevron-right"></i> Artikel & Opini
                    </Link>
                  </li>
                  <li>
                    <Link href="/press-release">
                      <i className="bx bx-chevron-right"></i> Siaran Pers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-area style-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="cpr-left">
                <p>Hak Cipta © <Link href="/">IKPMJ</Link>, Seluruh hak cipta dilindungi.</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cpr-right">
                <ul>
                  <li><Link href="/privacy-policy">Kebijakan Privasi</Link></li>
                  <li><Link href="/cookie-policy">Kebijakan Cookie</Link></li>
                </ul>
                <ul className="social-list">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-instagram-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy-logo">
            <img src="/img/all-img/ikpmj.png" alt="image" className="footer-logo-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
