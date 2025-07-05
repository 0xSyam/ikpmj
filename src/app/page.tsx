import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoTop from '@/components/GoTop';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Features from '@/components/Features';
import VideoArea from '@/components/VideoArea';
// import NewsArea from '@/components/NewsArea';
// import Faculty from '@/components/Faculty';
// import QuickSearch from '@/components/QuickSearch';
import CampusArea from '@/components/CampusArea';
// import ActivitiesArea from '@/components/ActivitiesArea';
import EventsArea from '@/components/EventsArea';
// import SuccessArea from '@/components/SuccessArea';
// import SubscribeArea from '@/components/SubscribeArea';

export const metadata: Metadata = {
  title: 'IKPMJ - Ikatan Keluarga Pelajar dan Mahasiswa Jember di Yogyakarta',
  description: 'Ikatan Keluarga Pelajar dan Mahasiswa Jember di Yogyakarta',
};

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Preloader */}
        <div className="preloader-container" id="preloader" style={{ display: 'none' }}>
          <div className="preloader-dot"></div>
          <div className="preloader-dot"></div>
          <div className="preloader-dot"></div>
          <div className="preloader-dot"></div>
          <div className="preloader-dot"></div>
        </div>

        {/* Banner Area */}
        <Banner />

        {/* About Us Area */}
        <About />

        {/* Features Area */}
        <Features />

        {/* Video Area */}
        <VideoArea />



        {/* Campus Area */}
        <CampusArea />

        {/* Events Area */}
        <EventsArea />

        {/* Success Area */}


        {/* Subscribe Area */}
      </main>

      <Footer />
      <GoTop />
    </>
  );
}
