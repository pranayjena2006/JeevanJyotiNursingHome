import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { DoctorsSection } from "@/components/doctors-section"
import { ReviewsSection } from "@/components/reviews-section"
import { TrustSection } from "@/components/trust-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FacilitiesSection />
      <DoctorsSection />
      <ReviewsSection />
      <TrustSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
