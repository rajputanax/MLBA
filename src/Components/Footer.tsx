import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer--container">
        <p>
            find me on Upwork
          <SiUpwork className="upwork--icon" /> 
        </p>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
        <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="upwork--badge">
          <SiUpwork className="upwork--icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer