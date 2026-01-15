
import "../STYLE/Hero.css";
import bannerImg from '../assets/hr.png';

const Hero = () => {
  return (
    <section className="hero flip-item">
      <div className="inner-wrapper">
        <div className="hero-content flip-item">
          <h1 className="hero-title flip-item">
            Welcome to <span>Our Platform</span>
          </h1>

          <p className="hero-subtitle flip-item">
            We provide solutions that help your business grow faster and smarter.
          </p>

          <div className="hero-buttons flip-item">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-image flip-item">
          <img src={bannerImg} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
