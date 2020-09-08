import React from 'react';

const Footer = ({ data }) => {
  let networks;

  if(data){
    networks = data.social.map(network => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      )
    })
  };

  return (
    <footer>
      <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
                {networks}
            </ul>

            <ul>
              <li>Modified with love by the Md Arif Hossain ♥️</li>
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2020 Md Arif Hossain</li>
              <li>Design by <a title="StyleShout" href="http://www.styleshout.com">StyleShout</a></li>
            </ul>
          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
