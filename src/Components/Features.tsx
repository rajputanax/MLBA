
import { FaBolt, FaShieldAlt, FaChartLine, FaUsers } from "react-icons/fa";
// import "./Features.css";

const featuresData = [
  {
    icon: <FaBolt />,
    title: "Fast Performance",
    description:
      "Optimized architecture ensures blazing fast load times and smooth user experience.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure by Design",
    description:
      "Built with modern security standards to keep your data protected at all times.",
  },
  {
    icon: <FaChartLine />,
    title: "Smart Analytics",
    description:
      "Get real-time insights and analytics to make better business decisions.",
  },
  {
    icon: <FaUsers />,
    title: "Team Friendly",
    description:
      "Collaborate seamlessly with your team using shared workflows and roles.",
  },
];

const Features = () => {
  return (
     <section className="features flip-item" id="features">
      <div className="features__container inner-wrapper flip-item">
        <div className="features__header w-50 flip-item">
          <h2 className="hero-title flip-item">
            Powerful <span>Features</span>
          </h2>
          <p className="flip-item">
            Everything you need to manage, scale, and grow your product.
          </p>
        </div>

        <div className="features-grid flex w-50">
          {featuresData.map((feature, index) => (
            <div className="feature__card card flip-item" key={index}>
              <div className="feature__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;
