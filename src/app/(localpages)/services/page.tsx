import React from "react";
import { FaCode, FaMobileAlt, FaSearch, FaHandsHelping, FaRocket, FaUsers } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="titles">Our Services</h1>
      <div className="services-container">
        {/* Web Development */}
        <div className="service-card">
          <FaCode className="service-icon" />
          <h2>Web Development</h2>
          <p>
            We create stunning and responsive websites tailored to your business
            needs using modern technologies.
          </p>
        </div>

        {/* App Development */}
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h2>App Development</h2>
          <p>
            Develop high-performance mobile apps with seamless user experiences
            for both iOS and Android platforms.
          </p>
        </div>

        {/* SEO Optimization */}
        <div className="service-card">
          <FaSearch className="service-icon" />
          <h2>SEO Optimization</h2>
          <p>
            Improve your website's visibility and rank higher on search engines
            with our advanced SEO strategies.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <h2 className="titles">Why Choose Us?</h2>
        <div className="why-container">
          <div className="why-item">
            <FaHandsHelping className="why-icon" />
            <h3>Trusted Expertise</h3>
            <p>
              Our team of professionals brings years of industry experience to
              deliver exceptional results.
            </p>
          </div>
          <div className="why-item">
            <FaRocket className="why-icon" />
            <h3>Innovative Solutions</h3>
            <p>
              We use the latest tools and technologies to ensure your project is
              future-proof and effective.
            </p>
          </div>
          <div className="why-item">
            <FaUsers className="why-icon" />
            <h3>Customer Focus</h3>
            <p>
              Your satisfaction is our priority. We work closely with you to
              understand and exceed your expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="our-process">
        <h2 className="titles">Our Process</h2>
        <ul>
          <li>
            <strong>1. Discovery:</strong> We discuss your goals and understand
            your requirements.
          </li>
          <li>
            <strong>2. Design:</strong> We create wireframes and mockups to
            visualize the end product.
          </li>
          <li>
            <strong>3. Development:</strong> We build and test the product
            following industry best practices.
          </li>
          <li>
            <strong>4. Delivery:</strong> We ensure a smooth launch and provide
            ongoing support.
          </li>
        </ul>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2 className="titles">What Our Clients Say</h2>
        <div className="testimonial-card">
          <p>
            "The team exceeded our expectations with their innovative approach
            and commitment to quality!"
          </p>
          <span>- John Doe, CEO of TechCorp</span>
        </div>
        <div className="testimonial-card">
          <p>
            "Their services are top-notch! They transformed our vision into a
            reality with a beautifully designed website."
          </p>
          <span>- Jane Smith, Founder of CreativeStudio</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Elevate Your Business?</h2>
        <p>
          Contact us today to discuss your project or learn more about our
          services.
        </p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default Services;
