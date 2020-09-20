import React from 'react';
import styles from './Footer.module.scss';
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import logo from '../../assets/images/logo.svg'
import CircleIcon from '../CircleIcon/CircleIcon';

const Footer: React.FC = () => (
  <div className={styles.Footer} data-testid="Footer">
    <Container className={styles.container}>
      <Row noGutters={true}>
        <Column size={{md: 2, xs: 6}} > 
          <img src={logo} alt="Logo" className={styles.brand}></img>  
        </Column>
      </Row>
      <Row>
        <Column size={{xs: 12, md:4}}>
          <div className={styles.footerDetail}>
            <i className="fas fa-map-marker-alt"></i>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus delectus cupiditate quis quasi. Repellat libero, qui rerum velit deserunt nulla.</p>
          </div>
        </Column>
        <Column size={{xs: 12, md:3}}>
          <div className={styles.footerDetail}>
            <i className="fas fa-phone-alt"></i>
            <p>+1-453-123-7890</p>
          </div>
          <div className={styles.footerDetail}>
            <i className="fas fa-envelope"></i>
            <p>example@fylo.com</p>
          </div>
        </Column>
        <Column size={{xs: 12, md:2}}>
          <ul className={styles.footerList}>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </Column>
        <Column size={{xs: 12, md:1}}>
          <ul className={styles.footerList}>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </Column>
        <Column size={{xs: 12, md:2}}>
          <Row horizontalAlignment={{xs: "center",md: "end"}}>
            <CircleIcon padding="0.7rem" icon="fab fa-facebook-f"></CircleIcon>
            <CircleIcon icon="fab fa-twitter"></CircleIcon>
            <CircleIcon icon="fab fa-instagram"></CircleIcon>
          </Row>
        </Column>

      </Row>
    </Container>
  </div>
);

export default Footer;
