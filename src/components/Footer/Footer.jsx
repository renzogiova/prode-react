import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import FooterStyles from './Footer.module.css';

function Footer() {
  return (
    <footer className={FooterStyles.footer}>
      <div style={{margin: '0 10px'}}>
        <p style={{margin:0}}>
          Open source project developed by @rgiova - 2024
        </p>
      </div>
      <div style={{display: 'flex', justifyContent:'center', margin: '0 10px'}}>
        <a href="#" style={{ display: 'flex', alignItems:'center', margin: '0 10px'}}>
          <FaGithubSquare/>
          Github
        </a>
        <a href="#" style={{ display: 'flex', alignItems:'center', margin: '0 10px'}}>
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer