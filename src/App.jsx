import CarrierProfileAbout from "./components/carrierProfileAbout/CarrierProfileAbout";
import CarrierProfileHeader from "./components/carrierProfileHeader/CarrierProfileHeader";
import DriversSection from "./components/driversSection/DriversSection";
import Footer from "./components/footer/Footer";
import GalleryCalendarSection from "./components/galleryCalendarSection/GalleryCalendarSection";
import Header from "./components/header/Header";
import ReviewsSection from "./components/reviewsSection/ReviewsSection";
import ServiceSection from "./components/serviceSection/ServiceSection";

function App() {
  return (
    <>
      <Header />
      <CarrierProfileHeader />
      <CarrierProfileAbout />
      <GalleryCalendarSection />
      <DriversSection />
      <ServiceSection />
      <ReviewsSection />
      <Footer />
    </>
  );
}

export default App;
