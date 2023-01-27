import React from 'react';
//_____________________________________________________________________________________
import './Footer.scss'
import {ReactComponent as FacebookIcon} from "../../assets/img/facebook.svg";
import {ReactComponent as TwitterIcon} from "../../assets/img/twitter.svg";
import {ReactComponent as InstagramIcon} from "../../assets/img/instagram.svg";
import {ReactComponent as PinterestIcon} from "../../assets/img/pinterest.svg";
//_____________________________________________________________________________________

const Footer = () => {
  return (
    <footer className="footer">
      <section className="follow">
        <div className="container">
          <h4 className="follow__title">
            Follow us
          </h4>
          <ul className="follow__list">
            <li className="follow__list__item">
              <a className="btn" href='/' rel="nofollow" target="_blank">
                <FacebookIcon title='Facebook'/>
              </a>
            </li>
            <li className="follow__list__item">
              <a className="btn" href='/' rel="nofollow" target="_blank">
                <TwitterIcon title='Twitter'/>
              </a>
            </li>
            <li className="follow__list__item">
              <a className="btn" href='/' rel="nofollow" target="_blank">
                <PinterestIcon title='Pinterest'/>
              </a>
            </li>
            <li className="follow__list__item">
              <a className="btn" href='/' rel="nofollow" target="_blank">
                <InstagramIcon title='Instagram'/>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="container">
        <p className="footer__copyright">
          ©
          2023 RECIPE.<br/>
          All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;