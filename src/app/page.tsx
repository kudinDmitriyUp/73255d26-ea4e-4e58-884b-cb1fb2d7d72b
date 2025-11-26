"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Beer, History, Sparkles, Star, Facebook, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="fluid"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="DuckBar"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Drinks", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to DuckBar"
          description="Experience authentic Ukrainian hospitality and traditional flavors in the heart of your city. DuckBar brings the warmth of Eastern European culture to every glass and every moment."
          tag="Local Ukrainian Bar"
          tagIcon={Beer}
          buttons={[
            { text: "Reserve a Table", href: "contact" },
            { text: "View Menu", href: "feature" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141046894-44tgsy0x.jpg"
          imageAlt="DuckBar cozy Ukrainian atmosphere"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="Where Tradition Meets Local Culture"
          description="DuckBar is more than just a bar. We are a gathering place celebrating Ukrainian heritage, authentic recipes passed down through generations, and the spirit of community. From traditional vodka selections to homemade Ukrainian appetizers, every detail reflects our commitment to bringing genuine Eastern European warmth to your evenings."
          tagIcon={History}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141047612-3kync8ia.jpg"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141048157-donvt2gx.jpg"
          }}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardEight
          title="What We Offer"
          description="Discover the distinctive offerings that make DuckBar your favorite local destination"
          tag="Our Selection"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Premium Ukrainian Vodka",
              description: "Carefully curated selection of traditional and craft Ukrainian vodkas, each with its own unique character and heritage story.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141048920-dko9iwgj.jpg"
            },
            {
              id: 2,
              title: "Authentic Appetizers",
              description: "Traditional Ukrainian bites prepared fresh daily using family recipes. From varenyky to pampushky, taste the real flavors of Ukraine.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141049478-5bww6e6q.jpg"
            },
            {
              id: 3,
              title: "Warm Atmosphere",
              description: "Cozy wooden interiors with traditional Ukrainian decorations create the perfect setting for friends to gather and celebrate life together.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141049999-gcxk9734.jpg"
            },
            {
              id: 4,
              title: "Live Entertainment",
              description: "Regular live music and cultural events featuring traditional Ukrainian songs, creating memorable evenings filled with joy and community.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141050677-ngiobtfe.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFour
          title="What Our Guests Say"
          description="Real stories from people who have experienced the DuckBar difference"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Maria Kovalenko",
              role: "Regular Guest",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141051456-axx08yha.jpg"
            },
            {
              id: "2",
              name: "Olena Shevchenko",
              role: "Visitor",
              company: "Out of Town",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141052136-n6owxdwp.jpg"
            },
            {
              id: "3",
              name: "Ivan Petrenko",
              role: "Event Organizer",
              company: "Local Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141052665-ou5k6flj.jpg"
            },
            {
              id: "4",
              name: "Sophia Lysenko",
              role: "First Time Visitor",
              company: "New Friends",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141053346-38omjrgh.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Join Us at DuckBar"
          description="Reserve your table for an unforgettable evening of authentic Ukrainian hospitality. Whether you are planning a casual night out or a special celebration, we look forward to welcoming you."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764141053880-t8givmsf.jpg"
          imageAlt="DuckBar evening atmosphere"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Reserve Now"
          termsText="We respect your privacy. Your reservation request will be handled with care."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="DuckBar"
          copyrightText="© DuckBar 2025. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Thursday: 5 PM - 11 PM", href: "#" },
                { label: "Friday - Saturday: 5 PM - 1 AM", href: "#" },
                { label: "Sunday: 5 PM - 10 PM", href: "#" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Ukrainian Street", href: "#" },
                { label: "City Center", href: "#" },
                { label: "+1 (555) 123-4567", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Follow us on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}