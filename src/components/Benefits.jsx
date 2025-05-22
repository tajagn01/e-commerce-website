import { FaTruck, FaHeadset, FaUndo, FaLock } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaTruck className="benefit-icon" />,
      title: "Free Shipping",
      description: "On all orders over $50"
    },
    {
      icon: <FaHeadset className="benefit-icon" />,
      title: "24/7 Support",
      description: "Dedicated support team"
    },
    {
      icon: <FaUndo className="benefit-icon" />,
      title: "Easy Returns",
      description: "30 days return policy"
    },
    {
      icon: <FaLock className="benefit-icon" />,
      title: "Secure Payment",
      description: "100% secure checkout"
    }
  ];

  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              {benefit.icon}
              <h3 className="benefit-title">
                {benefit.title}
              </h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 