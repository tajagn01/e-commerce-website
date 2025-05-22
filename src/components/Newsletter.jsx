const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="text-center">
          <h2 className="newsletter-title">
            Subscribe to Our Newsletter
          </h2>
          <p className="newsletter-subtitle">
            Stay updated with our latest products and exclusive offers
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button
              type="submit"
              className="newsletter-button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 